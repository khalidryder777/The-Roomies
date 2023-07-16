const express = require('express');
const cron = require('node-cron');
const sqlite3 = require('sqlite3').verbose();
const moment = require('moment');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');



const app = express();
// To ensure Express can handle JSON payloads, you'll need to use the bodyParser.json() 
app.use(bodyParser.json());
let db = new sqlite3.Database('./db/bills.db');

// Run a task every day at midnight
cron.schedule('0 0 * * *', () => {
    // Fetch all bills that need to be generated today
    let today = moment().startOf('day').format('YYYY-MM-DD');
    let stmt = db.prepare(`SELECT * FROM Bills WHERE nextGenerationDate = ?`);
    stmt.all(today, (err, bills) => {
        if (err) {
            throw err;
        }
        for (let bill of bills) {
            // Create a new bill
            let newBill = {
                title: bill.title,
                description: bill.description,
                amount: bill.amount,
                dueDate: calculateNextDueDate(bill.dueDate, bill.recurrence),
                // ... rest of the bill properties
            };

            // Save the new bill
            let insert = db.prepare(`INSERT INTO Bills (title, description, amount, dueDate, ...) VALUES (?, ?, ?, ?, ...)`);
            insert.run([newBill.title, newBill.description, newBill.amount, newBill.dueDate, ...], function(err) {
                if (err) {
                    return console.log(err.message);
                }
                console.log(`New bill added with ID: ${this.lastID}`);
            });
            insert.finalize();

            // Update the next generation date on the original bill
            bill.nextGenerationDate = calculateNextGenerationDate(bill.nextGenerationDate, bill.recurrence);
            let update = db.prepare(`UPDATE Bills SET nextGenerationDate = ? WHERE id = ?`);
            update.run([bill.nextGenerationDate, bill.id], function(err) {
                if (err) {
                    return console.log(err.message);
                }
                console.log(`Bill updated with ID: ${this.lastID}`);
            });
            update.finalize();
        }
    });
    stmt.finalize();
});

// Function to calculate the next due date based on the recurrence
function calculateNextDueDate(date, recurrence) {
    switch(recurrence) {
        case "weekly":
            return moment(date).add(1, 'weeks').format('YYYY-MM-DD');
        case "monthly":
            return moment(date).add(1, 'months').format('YYYY-MM-DD');
        case "yearly":
            return moment(date).add(1, 'years').format('YYYY-MM-DD');
        default:
            throw new Error(`Invalid recurrence: ${recurrence}`);
    }
}

// Function to calculate the next generation date based on the recurrence
function calculateNextGenerationDate(date, recurrence) {
    switch(recurrence) {
        case "weekly":
            return moment(date).add(1, 'weeks').format('YYYY-MM-DD');
        case "monthly":
            return moment(date).add(1, 'months').format('YYYY-MM-DD');
        case "yearly":
            return moment(date).add(1, 'years').format('YYYY-MM-DD');
        default:
            throw new Error(`Invalid recurrence: ${recurrence}`);
    }
}

// Mark a user's share of a bill as paid
app.post('/payments/pay', (req, res) => {
    const {billId, userId} = req.body; // extract billId and userId from req.body

    let stmt = db.prepare('UPDATE Payments SET paid = 1 WHERE billId = ? AND userId = ?');
    stmt.run([billId, userId], function(err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        // After marking a payment as paid, check if the associated bill is fully paid
        let checkStmt = db.prepare('SELECT COUNT(*) as count FROM Payments WHERE billId = ? AND paid = 0');
        checkStmt.get([billId], (err, row) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            if (row.count === 0) {
                // If there are no unpaid shares of the bill, update the bill's status to 'settled'
                let updateStmt = db.prepare('UPDATE Bills SET status = "settled" WHERE id = ?');
                updateStmt.run([billId], (err) => {
                    if (err) {
                        return res.status(500).json({ error: err.message });
                    }
                    res.json({ message: `Payment for bill ${billId} marked as paid, and the bill is now settled` });
                });
            } else {
                res.json({ message: `Payment for bill ${billId} marked as paid` });
            }
        });
    });
});


// Check if a bill is fully paid and update its status if it is
app.get('/bills/:id/status', (req, res) => {
    let billId = req.params.id;

    let stmt = db.prepare('SELECT COUNT(*) as count FROM Payments WHERE billId = ? AND paid = 0');
    stmt.get([billId], (err, row) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (row.count === 0) {
            // If there are no unpaid shares of the bill, update the bill's status to 'settled'
            let updateStmt = db.prepare('UPDATE Bills SET status = "settled" WHERE id = ?');
            updateStmt.run([billId], (err) => {
                if (err) {
                    return res.status(500).json({ error: err.message });
                }
                res.json({ message: `Bill ${billId} is settled` });
            });
        } else {
            res.json({ message: `Bill ${billId} is not settled` });
        }
    });
});

app.post('/users/register', (req, res) => {
    const { username, email, password } = req.body;
    bcrypt.hash(password, 10, function(err, hash) {
        if (err) {
            return res.status(500).json({ error: err });
        }
        let stmt = db.prepare('INSERT INTO Users (username, email, password) VALUES (?, ?, ?)');
        stmt.run([username, email, hash], function(err) {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json({ message: `User ${username} registered successfully` });
        });
    });
});

app.post('/users/login', (req, res) => {
    const { username, password } = req.body;
    let stmt = db.prepare('SELECT * FROM Users WHERE username = ?');
    stmt.get([username], (err, user) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        bcrypt.compare(password, user.password, function(err, result) {
            if (err) {
                return res.status(500).json({ error: err });
            }
            if (result) {
                const token = jwt.sign({ id: user.id }, 'your_secret_key', { expiresIn: '1h' });
                return res.json({ message: 'Logged in successfully', token });
            } else {
                return res.status(401).json({ error: 'Incorrect password' });
            }
        });
    });
});

app.get('/users/:id', (req, res) => {
    let userId = req.params.id;
    let stmt = db.prepare('SELECT id, username, email FROM Users WHERE id = ?');
    stmt.get([userId], (err, user) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    });
});

app.put('/users/:id', (req, res) => {
    const { username, email } = req.body;
    let userId = req.params.id;
    let stmt = db.prepare('UPDATE Users SET username = ?, email = ? WHERE id = ?');
    stmt.run([username, email, userId], function(err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: `User ${userId} updated successfully` });
    });
});

// Please replace 'your_secret_key' with your own secret key.

// Note: This is a basic implementation. In a real-world application, you'd want to add better error handling, 
// input validation, handle cases where a user tries to register with a username or email that's already taken, etc. 
// And you should store your secret key in an environment variable or a secure place.

// You can place these endpoints in your server.js file where you have placed the other endpoints. 
// As a best practice, you should structure your Express app by breaking up your endpoints into different router modules, 
// but for the sake of simplicity, you can add these directly to your server.js file.

app.listen(3000, () => console.log('Server running on port 3000'));
