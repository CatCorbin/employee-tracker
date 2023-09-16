//We need inquirer and mysql to use this application
const inquirer = require("inquirer");
const mysql = require("mysql2");

//creating mysql connection
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "trilogy123",
    database: "employeeTracker_db",
});

//connecting to the database we just created
connection.connect((err) => {
    if (err) throw err;
    console.log("Connection to database successful!");
    start();
});
