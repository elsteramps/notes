import React from 'react';

function Notes({notes}) {
    return (
        <ul className='list-group'>
            {notes.map(note => {
                return <li
                className='list-group-item note p-3'
                key = {note.id}>

                        <div>
                            <strong>{note.title}</strong>
                            <small className='date'>{new Date().toLocaleDateString()}</small>
                        </div>
                        
                        <button 
                            type="button" 
                            class="btn btn-outline-danger btn-sm">
                            &times;
                        </button>
                    </li>
            })}
            
        </ul>
    );
}

export default Notes;