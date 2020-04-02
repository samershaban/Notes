const auth = require('../middleware/auth');
const {Note, validate} = require('../models/note');
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

router.get('/', async (req, res) => {
    const notes = await Note.find();
    res.send(notes);
});

router.post('/', auth, async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
  
    note = new Note({ 
        title: req.body.title,
        body: req.body.body 
    });
    await note.save();
    
    res.send(note);
  });

module.exports = router;
