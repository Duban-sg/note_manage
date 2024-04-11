import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function NewNote({ onAddNote, onShowModalNote,categoryId, categories, setCategories }) {

const [name, setName] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const newNote = {
      id: Date.now(),
      name: name,
      content: content
    };

    const updatedCategories = categories.map(category => {
      if (category.id === categoryId) {
        return {
          ...category,
          lists: [...category.lists, newNote]
        };
      }
      return category;
    });

    setCategories(updatedCategories);

    setName('');
    setContent('');
    onShowModalNote(false);
  };

  const handleClose = () => {
    setName('');
    setContent('');
    onShowModalNote(false);
  };

  return (
    <>
      <Modal
        show={onShowModalNote}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Nueva Nota</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            placeholder="Título de la nota"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <textarea
            placeholder="Cuerpo de la nota"
            className="form-control"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Add Note
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export { NewNote };
