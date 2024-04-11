import React from "react";
import "../App.css";
import { Category } from "../components/Category";
import { NoteList } from "../components/NoteList";
import { NoteViewer } from "../components/NoteViewer";
import { AddNotes } from "../components/AddNote";
import { CreateNoteButton } from "../components/CreateNoteButton";
import { useNotes } from "./useNotes";
import { CategoryForm } from "../components/Category/CategoryForm";
import { useCategory } from "./useCategory";
import { Notesearch } from "../components/NoteSearch";
import { TodoList } from "../components/TodoList";
import { NewNote } from "../components/NoteList/NewNote";
function App() {
  const {
    AddNote,
    SaveNote,
    DeleteNote,
    notes,
    setOpenNoteModal,
    openModal,
    NoteSelect,
    editingNote,
    selectedNoteIndex,
    SetselectedNoteIndex,
  } = useNotes();

  const {
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
  } = useCategory();
 
  const handleToggleForm = () => {
    setShowModalNote(true);
  };
  return (
    <div className="app">
      <Category
        categories={categories}
        onSelectCategory={handleSelectCategory}
        onShowModalCategory={setShowModalCategory}
      />

      <div className="note-list">
        <div className="row">
          <h3>
            DevOps
            <span
              className="badge bg-primary rounded-pill"
              onClick={handleToggleForm}
            >
              +
            </span>
            {/* Botón para mostrar u ocultar el formulario */}
          </h3>
          <h6>N Notas</h6>
        </div>

        {showModalCategory && (
          <CategoryForm
            onAddCategory={handleAddCategory}
            onShowModalCategory={setShowModalCategory}
          />
        )}
        {showModalNote && (
          <NewNote
            onAddNote={handleAddCategory}
            onShowModalNote={setShowModalNote}
            categoryId={selectedCategory}
            categories={categories}
            setCategories ={setCategories}
          />
        )}

        <Notesearch searchValue={searchValue} setSearchValue={setSearchValue} />

        <ul>
          {categories.map(
            (category, index) =>
              selectedCategory === index && (
                <NoteList
                  key={index}
                  list={category.lists}
                  onNoteSelect={handleSelectNote}
                  searchedNotes={searchedNotes}
                  seachText={searchValue}
                  categoryId={selectedCategory}
                  handleDeleteNote={handleDeleteNote}
                  
                />
              )
          )}
        </ul>
      </div>
      {/* <TodoList
              searchedNotes = {searchedNotes}            
              seachText = {searchValue}
            >
                
        
      </TodoList> */}

      <div>
        {selectedNote != null && (
          <NoteViewer
            key={selectedNote.id}
            note={selectedNote}
            onSaveNote={SaveNote}
          />
        )}
      </div>
    </div>
  );
}

export default App;

// <div className="app">

//   <NoteList
//   notes={notes}
//   onNoteSelect={NoteSelect}
//   onDeleteNote={DeleteNote} />

//   {selectedNoteIndex !== null && (
//     <NoteViewer
//       note={notes[selectedNoteIndex]}
//       editingNote={editingNote}
//       onSaveNote={SaveNote}
//     />
//   )}

//   <CreateNoteButton setOpenNoteModal={setOpenNoteModal} />
//   {openModal && (
//     <AddNotes onAddNote={AddNote} />
//   )}
// </div>
