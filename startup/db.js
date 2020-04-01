const mongoose = require('mongoose');

    module.exports = function() {
    mongoose.connect('mongodb://localhost/notes')
    .then(() => console.log('Connected to MongoDB'))
}