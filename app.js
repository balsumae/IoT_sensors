const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const sensorsRoutes = require('./api/routes/sensors');
const fetchDataRoutes = require('./api/routes/fetchData');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Handling CORS Error
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (res.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods','PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next(); 
});

app.set('view-engine', 'ejs');

app.get('/', (req, res) =>{
    res.render("../public/mainPage.ejs");
});



app.use('/sensors', sensorsRoutes);
app.use('/fetchData', fetchDataRoutes);

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })

});

module.exports = app;