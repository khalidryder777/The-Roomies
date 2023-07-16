const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./db/bills.db');

db.serialize(() => {
    db.run(`CREATE TABLE Users (
        id INTEGER PRIMARY KEY,
        username TEXT NOT NULL,
        email TEXT NOT NULL,
        password TEXT NOT NULL
        -- other fields as needed
    );`);

    db.run(`CREATE TABLE Bills (
        id INTEGER PRIMARY KEY,
        title TEXT NOT NULL,
        description TEXT NOT NULL,
        amount REAL NOT NULL,
        dueDate DATE NOT NULL,
        recurrence TEXT NOT NULL DEFAULT 'monthly',
        nextGenerationDate DATE NOT NULL,
        status TEXT NOT NULL DEFAULT 'unpaid'  -- 'unpaid', 'settled'
        -- other fields as needed
    );`);
    

    db.run(`CREATE TABLE Payments (
        id INTEGER PRIMARY KEY,
        billId INTEGER NOT NULL,
        userId INTEGER NOT NULL,
        amount REAL NOT NULL,
        paid INTEGER NOT NULL DEFAULT 0,  -- 0 means unpaid, 1 means paid
        FOREIGN KEY(billId) REFERENCES Bills(id),
        FOREIGN KEY(userId) REFERENCES Users(id)
    );`);
});

db.close();
