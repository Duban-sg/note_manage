import React from 'react'

function useCategory() {
    const initialCategories = [
        { id: 1, name: 'Categoría 1', lists: [{ id: 1, name: 'Lista 1', content: 'Contenido de la nota 1' }, { id: 2, name: 'Lista 2', content: 'Contenido de la nota 2' }] },
        { id: 2, name: 'Categoría 2', lists: [{ id: 3, name: 'Lista 3', content: 'Contenido de la nota 3' }, { id: 4, name: 'Lista 4', content: 'Contenido de la nota 4' }] },

    ];
    const [categories, setCategories] = React.useState(initialCategories);
    const [showForm, setShowForm] = React.useState(false);
    const [selectedCategory, setSelectedCategory] = React.useState(null);
    const [selectedNote, setSelectedNote] = React.useState(null);
    const [searchValue, setSearchValue] = React.useState('');

    const searchedNotes = categories.filter(category =>
        category.lists.some(list => 
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
            lists: []
        };
        setCategories([...categories, newCategory]);
    };

    const handleSelectCategory = (index) => {
        setSelectedCategory(index);

    };

    return {
        categories,
        setCategories,
        showForm,
        setShowForm,
        handleAddCategory,
        selectedCategory,
        handleSelectCategory,
        handleSelectNote,
        selectedNote,
        searchValue,
        setSearchValue,
        searchedNotes,
    }
}

export { useCategory };