//Get my SQL connection 
const connection = require("../config/connections.js");

//methods to query SQL db 
const orm ={
    //retrive the whole data
    selectAll: function(table, cb){
        // ?? is the table name
        const queryString = "SELECT * FROM ??;";
        connection.query(queryString, [table], function(err, result){
            if(err) throw err;
            console.log(result);

            //return the result
            cb(result);

        });
    },
    // Insert New row to the table
    insertOne: function(table, columns, data, cb){
        // ?? 1st is table, ?? is the column names and ? is value
        const queryString = "INSERT INTO ?? (??) VALUES (?);";
        connection.query(queryString, [table, columns, data], function(error, result){
            if(error) {throw error;
            }
            cb(result);
        });

    },

    //Update one value of one row given the id
    updateOne: function(table, id, column, newvalue, id, cb){
        //?? table name 
        // ?? column name
        // ? new value
        // ? id
        const queryString = "UPDATE ?? SET ?? = ? WHERE id =?;";
        connection.query(queryString, [table, column, newvalue, id], function(error, reuslt){
            if(error){throw error;}
            cb(result);
        });
    }
};
//make these available to other mouldes
module.exports = orm;
