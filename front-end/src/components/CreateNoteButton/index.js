import './CreateNoteButton.css'
function CreateNoteButton({ setOpenNoteModal }) {

    return (
        <button
            className='CreateNoteButton'
            onClick={
                () => {
                    setOpenNoteModal(state => !state);
                }

            }>+</button>
    );
}

export {CreateNoteButton};