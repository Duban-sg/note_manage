import React from "react";
import './noteViewer.css';
import { putNote } from "../../services/notesServices";

function NoteViewer({ note, onSaveNote }) {
    const [editing, setEditing] = React.useState(false);
    const [editedNote, setEditedNote] = React.useState({ ...note });

    const handleEdit = () => {
        setEditing(true);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEditedNote({
            ...editedNote,
            [name]: value
        });

    };

    const handleSave = async () => {
        try {
            const response = await putNote(editedNote);
            
            onSaveNote(editedNote);
                // Desactivar el modo de edición
            setEditing(false);
        } catch (error) {
            console.error('Error al guardar la nota:', error);
        }
    };

    return (
        <div className="note-viewer">
            <div className="container">

                {editing ? (
                    <>
                        <input
                            type="text"
                            name="content"
                            value={editedNote?.content}
                            onChange={handleInputChange}
                        />
                        <textarea
                            name="content"
                            value={editedNote?.content}
                            onChange={handleInputChange}
                        ></textarea>
                        <button onClick={handleSave}>Guardar</button>
                    </>
                ) : (
                    <>
                        <h2 onClick={handleEdit}>{note?.name}</h2>
                        <p onClick={handleEdit}>{note?.content}</p>
                    </>
                )}
            </div>
        </div>
    );
};

export { NoteViewer };