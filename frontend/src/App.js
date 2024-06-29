import React, { useState, useEffect } from 'react';
import Note from './components/Note';
import NoteForm from './components/NoteForm';
import axios from 'axios';
import './App.css';

const App = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios.get('/api/notes').then(response => {
      setNotes(response.data);
    });
  }, []);

  const addNote = (newNote) => {
    axios.post('/api/notes', newNote).then(response => {
      setNotes([...notes, response.data]);
    });
  };

  return (
    <div className="container">
      <h1>Bloc de Notas</h1>
      <NoteForm addNote={addNote} />
      <div id="notesContainer">
        {notes.map(note => (
          <Note key={note._id} note={note} />
        ))}
      </div>
    </div>
  );
};

export default App;
