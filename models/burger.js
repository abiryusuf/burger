//Get ORM modules
const orm =require("../config/orm.js");

//Calling ORM functions using burger specific input for the ORM

const dbQueries = {
    //Get all burgers from the database
    getBurgerS: function(cb){
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
};
// to transfer for other modules
module.exports = dbQueries;
