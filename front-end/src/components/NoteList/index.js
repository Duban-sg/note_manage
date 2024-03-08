import React from 'react';
import './notelist.css';

function NoteList ({ notes, onNoteSelect , onDeleteNote}) {
    return (
      <div className="note-list">
        <h2>Notas</h2>
        <ul>
          {notes.map((note, index) => (
            <li key={index} onClick={() => onNoteSelect(index)}>
              {note.title}
              {/* <button onClick={() => handleDelete(note.id)}>X</button> */}
            </li>
          ))}
        </ul>
      </div>
    );
};

export {NoteList};