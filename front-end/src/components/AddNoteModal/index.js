import React, { useState } from 'react';
import './AddNoteModal.css';
const AddNoteModal = ({ onAddNote }) => {

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   onAddNote({ title, body });
  //   setTitle('');
  //   setBody('');

  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Realizar una solicitud POST al backend para crear una nueva nota
      const response = await fetch('/api/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, body })
      });

      if (!response.ok) {
        throw new Error('Error al crear una nueva nota');
      }

      // Si la solicitud es exitosa, llamar a la función onAddNote para agregar la nueva nota al estado de la aplicación
      onAddNote({ title, body });

      // Limpiar los campos del formulario después de enviar la solicitud
      setTitle('');
      setBody('');
    } catch (error) {
      console.error('Error:', error);
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
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        ></textarea>

        <button type="submit" className='button-add'>Agregar Nota</button>


      </form>
    </div>
  );
};

export { AddNoteModal };
