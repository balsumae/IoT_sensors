const express = require('express');
const router = express.Router();
const sql = require("../../db.js");


router.post('/', (req, res, next) => { 
    const software_id = parseInt(req.body.id); 
    const type_of_sensor = req.body.type;
    const value_of_sensor = req.body.value;
    const alert_of_sensor =  req.body.alert;
    const timestamp_of_reading = req.body.timestamp;

    try{

        sql.query("INSERT INTO sensorsDetails (software_id, type_of_sensor, value_of_sensor, alert_of_sensor, timestamp_of_reading) VALUES (" + software_id+ ", '"+type_of_sensor+"','"+value_of_sensor+"','"+alert_of_sensor+"','"+timestamp_of_reading+"');" , (err, result) => {
            if (err) {
              console.log("error: ", err);
            }
    
            if(result){
                res.status(200).json({
                    message: 'sensor record has been added'
                });
    
            }
            else{
                res.status(400).json({
                    message: 'failed to add new sensor record'
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