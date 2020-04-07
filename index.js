const error = require('./middleware/error');
const config = require('config');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const express = require('express');
const app = express();

require('./startup/logging')
require('./startup/db')();
require('./startup/routes')(app);

if(!config.get('jwtPrivateKey')) {
    throw new Error("ERROR: No jwtPrivateKey defined");
}

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
