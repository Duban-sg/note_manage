import React from 'react';
import './notelist.css';
import { deleteNote } from '../../services/notesServices';

function NoteList(props) {

  const handleDeleteNote = async (noteId) => {
    try {
      const success = await deleteNote(noteId);
      if (success) {
        props.onDeleteNote(noteId);
        window.location.reload();// cambiar
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
        {props.list.map((note, index) => (
          <li key={index} onClick={() => props.onNoteSelect(note)}>
            {note.name}
            <button onClick={() => handleDeleteNote(note.id)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
};


export { NoteList };