import React from 'react';

const Note = ({ note }) => {
  return (
    <div className="note">
      <p>{note.content}</p>
    </div>
  );
};

export default Note;
