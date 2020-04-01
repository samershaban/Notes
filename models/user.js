const Joi = require('joi');
const config = require('config');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 60
    },
    email: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 100,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8,
        maxLength: 1024
    },
    isAdmin: Boolean
})

const User = mongoose.model('User', userSchema);

function validateUser(user) {
    const schema = {
        name: Joi.string().min(3).max(50).required(),
        email: Joi.string().min(5).max(100).email().required(),
        password: Joi.string().min(8).max(1024).required()
    };
    return Joi.validate(user, schema);
}

exports.User = User;
exports.validate = validateUser;