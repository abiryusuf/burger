//Dependencies 
var mysql = require("mysql");

//Set Up the connection

var connection = mysql.createConnection({
    host: "localhost", 
    port: 3306,
    user: "root",
    password: "ja135786",
    database: "burgers_db"

});

//connect with database
connection.connect(function(error){
    if(!!error){
        console.error("error connecting: " + error.stack);
    }
    console.log("Connected Id " + connection.threadId);
});

module.exports = connection;