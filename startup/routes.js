const express = require('express');
const users = require('../routes/users');
const authentication = require('../routes/authentication');

const notes = require('../routes/notes');

module.exports = function(app) {
    app.use(express.json());
    app.use('/api/notes', notes);
    app.use('/api/users', users);
    app.use('/api/authentication', authentication)
}
