import React from 'react';
import './App.css';
import { NoteList } from './components/NoteList';
import { NoteViewer } from './components/NoteViewer';
import { AddNoteModal } from './components/AddNoteModal';
import { CreateNoteButton } from './components/CreateNoteButton';
import { getNotes } from './services/notesServices';

function App() {
  const [selectedNoteIndex, setSelectedNoteIndex] = React.useState(null);
  const [showAddNoteModal, setShowAddNoteModal] = React.useState(false);
  const [editingNote, setEditingNote] = React.useState(null);

  

  const [notes, setNotes] = React.useState([]);

  React.useEffect(() => {
    // Realizar una solicitud GET al backend para obtener todas las notas
    setNotes(getNotes());
  }, []); 

  const handleNoteSelect = (index) => {
    setSelectedNoteIndex(index);
  };

  const handleAddNote = (newNote) => {
    setNotes([...notes, newNote]);
    setShowAddNoteModal(false); 
  };

  const handleSaveNote = (editedNote) => {
    const updatedNotes = [...notes];
    updatedNotes[selectedNoteIndex] = editedNote;
    setNotes(updatedNotes);
  };

  const handleDeleteNote = (noteId) => {
    // Filtrar las notas para eliminar la nota con el ID correspondiente
    const updatedNotes = notes.filter(note => note.id !== noteId);
    // Actualizar el estado de la aplicación con las notas filtradas
    setNotes(updatedNotes);
  };

  return (
    <div className="app">

      <NoteList notes={notes} onNoteSelect={handleNoteSelect} onDeleteNote={handleDeleteNote}/>

      {selectedNoteIndex !== null && (
        <NoteViewer 
          note={notes[selectedNoteIndex]} 
          editingNote={editingNote}
          onSaveNote={handleSaveNote}
        />
      )}

      <CreateNoteButton setShowAddNoteModal={setShowAddNoteModal}/>
      {showAddNoteModal && (       
        <AddNoteModal onAddNote={handleAddNote} />
      )}
    </div>
  );
}

export default App;
