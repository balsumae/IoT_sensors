const express = require('express');
const router = express.Router();
const sql = require("../../db.js");


router.get('/temperature', (req, res, next) => {
    try{
        temperature = "temperature";
        alert_of_sensor = "True";
        sql.query("SELECT * FROM sensorsDetails WHERE type_of_sensor = '"+temperature+"' and alert_of_sensor ='"+alert_of_sensor+"' ORDER BY timestamp_of_reading + 0 DESC;" , (err, result) => {
            if (err) {
              console.log("error: ", err);
            }
            if(result){
                console.log(result);
                res.status(200).json(result);
            }
            else{
                res.status(400).json({
                    message: ' failed to get the sensors'
                });
            }
          });

    }
    catch (err){
        res.status(500).json({
            error: err
        });

    }
});


router.get('/door', (req, res, next) => {
    try{
        door = "doorOpen";
        sql.query("SELECT * FROM sensorsDetails WHERE type_of_sensor = '"+door+"'  ORDER BY timestamp_of_reading + 0 DESC;" , (err, result) => {
            if (err) {
              console.log("error: ", err);
            }
            if(result){
                console.log(result);
                res.status(200).json(result);
            }
            else{
                res.status(400).json({
                    message: ' failed to get the sensors'
                });
            }
          });

    }
    catch (err){
        res.status(500).json({
            error: err
        });

    }
});


module.exports = router;