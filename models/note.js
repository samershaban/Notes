const Joi = require('joi');
const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 20
    },
    body: {
        type: String,
        required: true,
        minLength:1,
        maxLength: 2048
    }
})

const Note = mongoose.model('Note', noteSchema);

function validateNote(note) {
    const schema = {
        title: Joi.string().min(2).required(),
        body: Joi.string().min(1).required()
    };

    return Joi.validate(note, schema);
}
exports.noteSchema = noteSchema;
exports.Note = Note;
exports.validate = validateNote;