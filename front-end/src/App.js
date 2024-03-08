import React from 'react';
import './App.css';
import { NoteList } from './components/NoteList';
import { NoteViewer } from './components/NoteViewer';
import { AddNoteModal } from './components/AddNoteModal';
import { CreateNoteButton } from './components/CreateNoteButton';

function App() {
  const [selectedNoteIndex, setSelectedNoteIndex] = React.useState(null);
  const [showAddNoteModal, setShowAddNoteModal] = React.useState(false);
  const [editingNote, setEditingNote] = React.useState(null);

  const [notes, setNotes] = React.useState([
    { title: 'Nota 1', body: 'Contenido de la nota 1' },
    { title: 'Nota 2', body: 'Contenido de la nota 2' },
    { title: 'Nota 3', body: 'Contenido de la nota 3' },
  ]);

  // const [notes, setNotes] = React.useState([]);

  // React.useEffect(() => {
  //   // Realizar una solicitud GET al backend para obtener todas las notas
  //   fetch('/api/notes')
  //     .then(response => response.json())
  //     .then(data => {
  //       setNotes(data);
  //     })
  //     .catch(error => {
  //       console.error('Error al obtener las notas:', error);
  //     });
  // }, []); // Ejecutar solo una vez al montar el componente



  const handleNoteSelect = (index) => {
    setSelectedNoteIndex(index);
    //setEditingNote(notes[index]); // Inicializar la nota en edición al seleccionarla
  };

  const handleAddNote = (newNote) => {
    setNotes([...notes, newNote]);
    setShowAddNoteModal(false); 
  };

  const handleSaveNote = (editedNote) => {
    const updatedNotes = [...notes];
    updatedNotes[selectedNoteIndex] = editedNote;
    setNotes(updatedNotes);
   // setEditingNote(null); // Limpiar la nota en edición después de guardar los cambios
  };



  return (
    <div className="app">

      <NoteList notes={notes} onNoteSelect={handleNoteSelect} />

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
