# Project Ideation

This project aims to create a web application to handle common tasks in shared living situations. 

## Problem Statement

The problem to solve is the effective distribution and rotation of chores amongst roommates in shared dwellings in NYC. 

## Solution

The web application will be based on the following combinatorics:

- Dwellings: 1-3 bedrooms
- Occupancy: 1-5 people
- Bathrooms: 1-3 bathrooms

The chores to be managed are:

- Kitchen Cleaning
- Floor Brooming & Mopping
- Garbage Throwing
- Bathroom Cleaning

## Chore Distribution Frameworks

The chore distribution frameworks under consideration are:

1. Rotational Framework: Each person is assigned a chore and these assignments rotate regularly.
2. Fixed Responsibility Framework: Each person is assigned one or more chores for a longer period.
3. Preference-based Framework: Chores are assigned based on individual preferences, while ensuring an equitable distribution.

The initial focus will be on the Rotational Framework.

## Implementation Plan

The project will be implemented in stages as follows:

1. **Design the database schema**: Including users, dwellings, chores, and the relationship between these entities.
2. **Backend Development (Django + SQLite)**: Developing API endpoints to handle initial configuration, fetch current tasks, and implement the chore rotation logic.
3. **Frontend Development (React)**: Developing the user interface components to handle user inputs and display current tasks.
4. **Integration and Testing**: Ensuring that the backend and frontend work together as expected, and running comprehensive tests to catch and fix any bugs.

Further stages will focus on implementing the other chore distribution frameworks, and other features like bill splitting, boundary setting, and a chat box.

## Tech Stack

- React: Frontend Development
- Django: Backend Development
- SQLite: Database

This documentation will be updated as the project progresses.
