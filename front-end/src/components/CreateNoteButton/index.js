import './CreateNoteButton.css'
function CreateNoteButton({ setShowAddNoteModal }) {

    return (
        <button
            className='CreateNoteButton'
            onClick={
                () => {
                    setShowAddNoteModal(state => !state);
                }

            }>+</button>
    );
}

export {CreateNoteButton};