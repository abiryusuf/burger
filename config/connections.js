//Dependencies 
var mysql = require("mysql");

//Set Up the connection

//var JAWSDB_URL = "";
var connection;

if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
 connection = mysql.createConnection({
    host: "ijj1btjwrd3b7932.cbetxkdyhwsb.us-east-1.rds.amazonaws.com", 
    port: 3306,
    user: "tsj95oopinsq4x2e",
    password: "l97ssvwqelghdc8o",
    database: "v3sd2c7tg5rwl6ig"

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