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
  } = useCategory();

  return (
    <div className="app">
      <Category
        categories={categories}
        onSelectCategory={handleSelectCategory}
        onShowForm={setShowForm}
      />

      <div className="note-list">
        <div className="row">
          <h3>
            DevOps
            <span className="badge bg-primary rounded-pill" onClick={AddNote}>
              +
            </span>
            {/* Botón para mostrar u ocultar el formulario */}
          </h3>
          <h6>N Notas</h6>
        </div>

        {showForm && <CategoryForm onAddCategory={handleAddCategory} onShowForm={setShowForm} />}
        <Notesearch searchValue={searchValue} setSearchValue={setSearchValue} />

        <ul>
          {categories.map(
            (category, index) =>
              selectedCategory === index && (
                <NoteList
                  key={index}
                  list={category.lists}
                  onNoteSelect={handleSelectNote}
                  onDeleteNote={DeleteNote}
                  searchedNotes={searchedNotes}
                  seachText={searchValue}
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
