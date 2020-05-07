// var orm = require("./config/orm.js");

// orm.selectAll("burgers");

//Get express and handlebars
const express = require("express");
const exphbs = require("express-handlebars");

const routes = require("./controllers/burgers_controller.js");

var app = express();


//PORT
var PORT = process.env.PORT || 8080;


app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");


var path =require("path");
app.use(express.static(path.join(__dirname, "public")));

//Parse application body JSON
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(routes);

//Array of objects including all burgers
burgers = [];

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Tell user when server is ready
    console.log("Server listening on: http://localhost:" + PORT);
  });
