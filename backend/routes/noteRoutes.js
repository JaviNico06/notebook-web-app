const express = require('express');
const Note = require('../models/note');
const router = express.Router();

router.get('/', async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
});

router.post('/', async (req, res) => {
  const newNote = new Note({
    content: req.body.content
  });
  const savedNote = await newNote.save();
  res.json(savedNote);
});

module.exports = router;
