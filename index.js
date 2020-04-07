require('express-async-errors');
require('winston-mongodb');
const error = require('./middleware/error');
const winston = require('winston');
const config = require('config');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const express = require('express');
const app = express();

require('./startup/db')();
require('./startup/routes')(app);

winston.handleExceptions(
    new winston.transports.File({filename: 'uncaughtExceptions.log'})
)
process.on('unhandledRejection', (e) => {
    throw ex;
});

winston.add(winston.transports.File, {filename: 'logfile.log'});
winston.add(winston.transports.MongoDB, {
    db: 'mongodb://localhost/vidly',
    level: 'error'
});

if(!config.get('jwtPrivateKey')) {
    console.log("ERROR: no jwtPrivateKey");
    process.exit(1);
}
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
