import React, { useState } from 'react';

const NoteForm = ({ addNote }) => {
  const [noteContent, setNoteContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote({
      content: noteContent
    });
    setNoteContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={noteContent}
        onChange={(e) => setNoteContent(e.target.value)}
        placeholder="Escribe tu nota aquí..."
      ></textarea>
      <button type="submit">Guardar Nota</button>
    </form>
  );
};

export default NoteForm;
