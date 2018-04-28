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
 console.log(results);

  for (var i = 0; i < results; i++) {
    console.log(results[i].item_id + "||" + results[i].productname + 
    " ||" + results[i].department_name + "||" + results[i].price + "||" + results[i].stock_quantity)
    console.log(results);
    };
    console.log("__________________________________________");
start();

});


function start () {
  inquirer.prompt([{
      name: "item_id",
      type: "input",
      message: "What is the ID of the product you want to buy ?",
    },

    {
      name: "stock_quantity",
      type: "input",
      message: "How many units would you like to buy ?",
    },

  ]).then(function(answer){
   prodavailable(answer.item_id, answer.stock_quantity);
    console.log(answer);


function prodavailable(item_id,stock_quantity){
  connection.query('SELECT * FROM products WHERE item_id=?', item_id, function (error, results){
  for( var i = 0; i < results.length; i++){
    console.log (results[i].stock_quantity); 
    console.log (stock_quantity);

    if (parseInt(results[i].stock_quantity) < parseInt(stock_quantity)) {
      console.log("Stock Unav");
    } else {
      console.log("Stock avialable");
    }};

})
};


// aqui hay que cerrar bien .....

// function prodavailable(item_id,stock_quantity){
//   connection.query('SELECT * FROM products WHERE item_id=?', item_id, function (error, results){
//     console.log (results.stock_quantity);

//   if ( results.stock_quantity > stock_quantity) {
//     console.log("Insufficient quantity!");
//   } else
//     console.log("Stock avialable");
  })};


