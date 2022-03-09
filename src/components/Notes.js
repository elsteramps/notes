import React from 'react';

function Notes({notes, onRemove}) {

    return (
        <ul className='list-group'>
            {notes.map(note => {
                return <li
                className='list-group-item note p-3'
                key = {note.id}>

                        <div>
                            <strong>{note.title}</strong>
                            <small className='date'>{note.date}</small>
                        </div>
                        
                        <button 
                            type="button" 
                            className="btn btn-outline-danger btn-sm"
                            onClick={() => onRemove(note.id)}>
                            &times;
                        </button>
                    </li>
            })}
            
        </ul>
    );
}

export default Notes;