import React from 'react';

function CategoryForm({ onAddCategory }) {
  const [categoryName, setCategoryName] = React.useState('');

  const handleChange = (event) => {
    setCategoryName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddCategory(categoryName);
    setCategoryName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="categoryName" className="form-label">Nombre de la categoría:</label>
        <input 
          type="text" 
          className="form-control" 
          id="categoryName" 
          value={categoryName} 
          onChange={handleChange} 
          required 
        />
      </div>
      <button type="submit" className="btn btn-primary">Agregar Categoría</button>
    </form>
  );
}

export {CategoryForm};
