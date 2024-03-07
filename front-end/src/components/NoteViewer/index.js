import React from "react";
import './noteViewer.css';

function NoteViewer({ note, onEditNote, onSaveNote }) {
    const [editing, setEditing] = React.useState(false);
    const [editedNote, setEditedNote] = React.useState({ ...note });

    React.useEffect(() => {
        setEditedNote({ ...note }); // Reinicializar la nota editada cuando se cambia la nota
        setEditing(false); // Desactivar el modo de edición al cambiar la nota
    }, [note]);

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

    const handleSave = () => {
        onSaveNote(editedNote);
    };

    return (
        <div className="note-viewer">
            <div className="container">

                {editing ? (
                    <>
                        <input
                            type="text"
                            name="title"
                            value={editedNote.title}
                            onChange={handleInputChange}
                        />
                        <textarea
                            name="body"
                            value={editedNote.body}
                            onChange={handleInputChange}
                        ></textarea>
                        <button onClick={handleSave}>Guardar</button>
                    </>
                ) : (
                    <>
                        <h2 onClick={handleEdit}>{note.title}</h2>
                        <p onClick={handleEdit}>{note.body}</p>
                    </>
                )}
            </div>
        </div>
    );
};

export { NoteViewer };