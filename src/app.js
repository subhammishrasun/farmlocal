const express = require('express');
const morgan = require('morgan');
const routes = require('./routes');
const errorHandler = require('./middlewares/error.middleware');


const app = express();


app.use(express.json());
app.use(morgan('dev'));


app.use('/api', routes);


app.use(errorHandler);


module.exports = app;