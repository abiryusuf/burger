//Dependencies 
var mysql = require("mysql");

//Set Up the connection

var connection = mysql.createConnection({
    host: "localhost", //will change
    port: 3306,
    user: "",
    password: "",
    database: ""

});

//connect with database
connection.connect(function(err){
    if(err){
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("Connected Id " + connection.threadId);
});