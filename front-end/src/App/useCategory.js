import React from "react";

function useCategory() {
  const initialCategories = [
    {
      id: 1,
      name: "Categoría 1",
      lists: [
        { id: 1, name: "Lista 1", content: "Contenido de la nota 1" },
        { id: 2, name: "Lista 2", content: "Contenido de la nota 2" },
      ],
    },
    {
      id: 2,
      name: "Categoría 2",
      lists: [
        { id: 3, name: "Lista 3", content: "Contenido de la nota 3" },
        { id: 4, name: "Lista 4", content: "Contenido de la nota 4" },
      ],
    },
  ];
  const [categories, setCategories] = React.useState(initialCategories);
  const [showModalNote, setShowModalNote] = React.useState(false);
  const [showModalCategory, setShowModalCategory] = React.useState(false);
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [selectedNote, setSelectedNote] = React.useState(null);
  const [searchValue, setSearchValue] = React.useState("");

  const searchedNotes = categories.filter((category) =>
    category.lists.some((list) =>
      list.name.toLowerCase().includes(searchValue.toLowerCase())
    )
  );

  const handleSelectNote = (note) => {
    setSelectedNote(note);
  };

  const handleAddCategory = (newCategoryName) => {
    const newCategory = {
      id: categories.length + 1,
      name: newCategoryName,
      lists: [],
    };
    setCategories([...categories, newCategory]);
  };

  const handleSelectCategory = (index) => {
    setSelectedCategory(index);
  };

  const handleDeleteNote = (categoryId, noteId) => {
    
    // Clonar el arreglo de categorías
    const updatedCategories = [...categories];
    // Encontrar la categoría en el arreglo de categorías
    const categoryIndex = updatedCategories.findIndex(
      (category) => category.id === categoryId
    );

    if (categoryIndex !== -1) {
      // Clonar la categoría para evitar mutaciones directas
      const updatedCategory = { ...updatedCategories[categoryIndex] };

      // Filtrar las notas para eliminar la nota específica
      updatedCategory.lists = updatedCategory.lists.filter(
        (note) => note.id !== noteId
      );

      // Actualizar la categoría en el arreglo de categorías
      updatedCategories[categoryIndex] = updatedCategory;

      // Actualizar el estado de las categorías con las categorías actualizadas
      setCategories(updatedCategories);
    }
  };

  return {
    categories,
    setCategories,
    showModalNote,
    setShowModalNote,
    handleAddCategory,
    selectedCategory,
    handleSelectCategory,
    handleSelectNote,
    selectedNote,
    searchValue,
    setSearchValue,
    searchedNotes,
    showModalCategory,
    setShowModalCategory,
    handleDeleteNote,
  };
}

export { useCategory };
