import React from 'react';
import './notelist.css';
import { deleteNote } from '../../services/notesServices';
function NoteList ({ notes, onNoteSelect , onDeleteNote}) {

  const handleDeleteNote = async () => {
    const success = await deleteNote(notes.id);
    if (success) {
        // Si la nota se eliminó correctamente, ejecutar la función proporcionada en onNoteDeleted
        onDeleteNote(notes.id);
    }
};
    return (
      <div className="note-list">
        <h2>Notas</h2>
        <ul>
          {notes.map((note, index) => (
            <li key={index} onClick={() => onNoteSelect(index)}>
              {note.title}
              <button onClick={handleDeleteNote}>x</button>
            </li>
          ))}
        </ul>
      </div>
    );
};

export {NoteList};