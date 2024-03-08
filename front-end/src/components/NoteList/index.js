import React from 'react';
import './notelist.css';
import { deleteNote } from '../../services/notesServices';
function NoteList ({ notes, onNoteSelect , onDeleteNote}) {

  const handleDeleteNote = async (noteId) => {
    try {
      const success = await deleteNote(noteId);
      if (success) {
        onDeleteNote(noteId);
      } else {
        console.error('Error: La eliminación de la nota no tuvo éxito');
      }
    } catch (error) {
      console.error('Error al eliminar la nota:', error);
    }
  };
    return (
      <div className="note-list">
        <h2>Notas</h2>
        <ul>
          {notes.map((note, index) => (
            <li key={index} onClick={() => onNoteSelect(index)}>
              {note.title}
              <button onClick={() => handleDeleteNote(note._id)}>x</button>
            </li>
          ))}
        </ul>
      </div>
    );
};

export {NoteList};