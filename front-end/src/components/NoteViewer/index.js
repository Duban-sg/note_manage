import React from "react";
import './noteViewer.css';
import { putNote } from "../../services/notesServices";
function NoteViewer({ note, onSaveNote }) {
    const [editing, setEditing] = React.useState(false);
    const [editedNote, setEditedNote] = React.useState({ ...note });

    // React.useEffect(() => {
    //     setEditedNote({ ...note }); // Reinicializar la nota editada cuando se cambia la nota
    //     setEditing(false); // Desactivar el modo de edición al cambiar la nota
    // }, [note]);

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

        const response = putNote(editedNote);

        if (!response.ok) {
            throw new Error('Error al guardar la nota');
        }else{
            // Llamar a la función onSaveNote para actualizar la nota en el estado de la aplicación
            onSaveNote(editedNote);
            // Desactivar el modo de edición
            setEditing(false);
        }
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
                            name="content"
                            value={editedNote.content}
                            onChange={handleInputChange}
                        ></textarea>
                        <button onClick={handleSave}>Guardar</button>
                    </>
                ) : (
                    <>
                        <h2 onClick={handleEdit}>{note.title}</h2>
                        <p onClick={handleEdit}>{note.content}</p>
                    </>
                )}
            </div>
        </div>
    );
};

export { NoteViewer };