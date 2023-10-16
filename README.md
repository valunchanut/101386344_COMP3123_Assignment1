COMP3123 Assignment 1: User and Employee Management System

Description:
This project is a simple user and employee management system built with Node.js, Express, and MongoDB. It provides API endpoints for managing users and employees.

Features:

- User registration and authentication
- CRUD operations for employees

Requirements:

- Node.js
- MongoDB
- npm

Setup and Installation:

1. Clone the repository:
   git clone https://github.com/valunchanut/101386344_COMP3123_Assignment1.git

2. Navigate to the project directory:
   cd [your-directory-name]

3. Install the dependencies:
   npm install

4. Start the server:
   node server.js

API Endpoints:

Users:

- Register: POST /users/register
- Login: POST /users/login

Employees:

- Add Employee: POST /employees
- Get All Employees: GET /employees
- Get Single Employee: GET /employees/:id
- Update Employee: PUT /employees/:id
- Delete Employee: DELETE /employees/:id

Testing:
You can test the API endpoints using tools like Postman or any preferred API testing tool.

Known Issues:

- Unable to test via Postman

Future Improvements:

- Fix any errors that may have caused problem with API Testing on Postman
