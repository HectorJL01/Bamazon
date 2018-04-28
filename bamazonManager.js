var mysql = require('mysql');
var inquirer = require('inquirer');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'bamazon_db'
});
connection.connect();

connection.query('SELECT * FROM products ', function (error, results) {
    var inquirer = require("inquirer");

    inquirer.prompt([{
            type: "checkbox",
            name: "homepage",
            message: "Select a Managers option",
            choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"]
    }

    ]).then(function (user) {
    
        if (user.homepage === View Products for Sale) {
            console.log("results");
        };
    })})