// get the model for the SQL queris
const dbQueries = require("../models/burger.js");

//get express & rotuer to create routes
const express = require("express");
const router = express.Router();

//Router
//====================================

router.get("/", function(req, result){
    dbQueries.getBurgers(function(data){
        burgers =data;
//render index comes from handlebars
        result.render("index", {
            burgers: burgers
        });
    });
});

//Add new
router.post("/api/burgers", function(req, res){
    dbQueries.addBurger(req.body.new_burger, function(reslut){
        res.json({id: reslut.insertId});
    });
});

//Update
router.put("/api/burgers/:id", function(req, res){
    var burger_id = req.params.id;
    dbQueries.eatBurger(burger_id, function(result){
        if(result.changedRows == 0){
            return res.status(404).end();
        }else {
            res.status(200).end();
        }
    });
});

module.exports = router;