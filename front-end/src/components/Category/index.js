import React from 'react';
import './Category.css';
import { CategoryForm } from './CategoryForm';
import { Button } from 'bootstrap';
function Category({ categories, onSelectCategory, onShowForm }) {
  const handleToggleForm = () => {
    onShowForm(state => !state);
  };

  const [isOpen, setIsOpen] = React.useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  const username = "solis";
  return (
    
    
    <div className="category ">
      <div className='container mt-3 ms-3'>
        <div className='accordion-item'>
          <h2 class="accordion-header">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <div>
                <img src="/user-avatar.jpg" alt="User Avatar" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
                <span className="ms-2">{username}</span>
              </div>
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <hr />
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Opción 1</li>
                <li className="list-group-item">Opción 2</li>
                <li className="list-group-item">Opción 3</li>
              </ul>
              <hr />
            </div>
          </div>
        </div>


        <div className='row'>
          <h3>Categorias
            <span className="badge bg-primary rounded-pill" onClick={handleToggleForm}>+</span> {/* Botón para mostrar u ocultar el formulario */}
          </h3>
        </div>
        <ul>
          {categories.map((category, index) => (
            <li key={index} onClick={() => onSelectCategory(index)}>
              {category.name}
              <span className="badge bg-primary rounded-pill">2</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export { Category };
