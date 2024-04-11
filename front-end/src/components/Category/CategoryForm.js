import React from "react";
import {Modal, Button } from 'react-bootstrap';

function CategoryForm({ onAddCategory, onShowModalCategory }) {

  const [categoryName, setCategoryName] = React.useState("");

  const handleChange = (event) => {
    setCategoryName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddCategory(categoryName);
    setCategoryName("");
    onShowModalCategory(false);
  };

  const handleClose = () => onShowModalCategory(false);

  return (
    <>
      <Modal
        show={onShowModalCategory}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Nueva Categoria</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <input
          type="text"
          required
          className="form-control"
          id="categoryName"
          value={categoryName}
          onChange={handleChange}
          placeholder="Nombre de la Categoria"
          
        />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>Add Categoria</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export { CategoryForm };
