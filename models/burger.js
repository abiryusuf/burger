//Get ORM modules
const orm =require("../config/orm.js");

// Import the ORM to create functions that will interact with the database.
//Calling ORM functions using burger specific input for the ORM

const dbQueries = {
    //Get all burgers from the database
    getBurgers: function(cb){
        orm.selectAll("burgers", function(result){
            //rows of the table are returned in "results"
            burgers = result;
            cb(result);
        });

    },
    //End getting Burgers


    //add a new burger in the database
    addBurger: function(burger_name, cb){
        orm.insertOne("burgers", ["burger_name"], [burger_name], function(result){
            cb(result);
        });
    }, //end of add burger
//id is the identifier of the burger where devoured is set to TRUE
eatBurger: function(id, cb){
    orm.updateOne("burgers", id, "devoured", true, function(result){
        cb(result);
    });
}

};
// to transfer for other modules
module.exports = dbQueries;
