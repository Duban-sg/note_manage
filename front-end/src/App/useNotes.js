import React from 'react'
import { getNotes } from '../services/notesServices';

function useNotes() {
    const [selectedNoteIndex, setSelectedNoteIndex] = React.useState(null);
    const [openModal, setOpenNoteModal] = React.useState(false);
    const [editingNote, setEditingNote] = React.useState(null);
    const [notes, setNotes] = React.useState([]);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const notesData = await getNotes();
                setNotes(notesData);
            } catch (error) {
                console.error('Error al obtener las notas:', error);
            }
        };
        fetchData();
    }, []);

    const NoteSelect = (index) => {
        setSelectedNoteIndex(index);
    };

    const AddNote = (newNote) => {
        setNotes([...notes, newNote]);
        setOpenNoteModal(false);
    };

    const SaveNote = (editedNote) => {
        const updatedNotes = [...notes];
        updatedNotes[selectedNoteIndex] = editedNote;
        setNotes(updatedNotes);
    };

    const DeleteNote = (noteId) => {
        const updatedNotes = notes.filter(note => note.id !== noteId);
        setNotes(updatedNotes);
    };

    return{
        AddNote,
        SaveNote,
        DeleteNote,
        notes,
        setOpenNoteModal,
        openModal,
        NoteSelect,
        editingNote,
        selectedNoteIndex,
        //SetselectedNoteIndex
    }
}

export {useNotes};