//Dependencies 
var mysql = require("mysql");

//Set Up the connection

//var JAWSDB_URL = "";
var connection;

if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
 connection = mysql.createConnection({
    host: "localhost", 
    port: 3306,
    user: "root",
    password: "ja135786",
    database: "burgers_db"

});
}

//connect with database
connection.connect(function(error){
    if(!!error){
        console.error("error connecting: " + error.stack);
    }
    console.log("Connected Id " + connection.threadId);
});

module.exports = connection;