import React, { useState } from 'react';
import './AddNoteModal.css';
import { postNotes } from '../../services/notesServices';
const AddNoteModal = ({ onAddNote }) => {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await postNotes(title, content);
      if (!response.ok) {
        throw new Error('Error al crear una nueva nota');
      } else {
        // Si la solicitud es exitosa, llamar a la función onAddNote para agregar la nueva nota al estado de la aplicación
        onAddNote({ title, content });
        // Limpiar los campos del formulario después de enviar la solicitud
        setTitle('');
        setContent('');
      }
    } catch (error) {
      console.error('Error al enviar la solicitud de la nueva nota:', error);
    }
  };
  
  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <label>Escribe Tu Nueva Nota</label>
        <input
          type="text"
          placeholder="Título de la nota"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Cuerpo de la nota"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>

        <button type="submit" className='button-add'>Agregar Nota</button>


      </form>
    </div>
  );
};

export { AddNoteModal };
