import React from "react";
import {Modal, Button } from 'react-bootstrap';
import { useState } from 'react';
function CategoryForm({ onAddCategory, onShowForm }) {

  const [categoryName, setCategoryName] = React.useState("");

  const handleChange = (event) => {
    setCategoryName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddCategory(categoryName);
    setCategoryName("");
    onShowForm(false);
  };

  const handleClose = () => onShowForm(false);

  return (
    <>
      <Modal
        show={onShowForm}
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
          className="form-control"
          id="categoryName"
          value={categoryName}
          onChange={handleChange}
          placeholder="Nombre de la Categoria"
          required
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
