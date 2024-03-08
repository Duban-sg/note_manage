import React, { useState } from 'react';
import './AddNoteModal.css';
const AddNoteModal = ({ onAddNote }) => {

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddNote({ title, body });
    setTitle('');
    setBody('');
    
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

export {AddNoteModal} ;
