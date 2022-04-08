import React, { useState } from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group'

function Notes({notes, onRemove}) {

    // const [style, setStyle] = useState({})

    const notesCpy = [...notes]

    const [notesArr, setNotes] = useState(notesCpy)

    const done = 'Done'
    const undone = 'Undone'

    const handleComplete =id => {
        const updateNotes = [...notesCpy].map(note => {
            if (note.id === id){
                note.done = !note.done
            }
            return note
        })

        notes = updateNotes
        setNotes(updateNotes)
    }




    return (
        <TransitionGroup component='ul' className='list-group'>
            {notes.map(note => {
               
                return( 
                <CSSTransition
                key={note.id}
                classNames={'note'}
                timeout={500}
                >
                <li className='list-group-item note p-3'>

                        <div className={`${note.done ? 'done' : ''} `}>
                            <strong>{note.title}</strong>
                            <small className='date'>{note.date}</small>
                        </div>

                        <div
                        style={{
                            display: 'flex', 
                            justifyContent: 'space-around', 
                            width: '130px',
                        }}
                        >
                        <button 
                            type="button" 
                            className={`btn note ${note.done ? 'btn-outline-warning' : 'btn-outline-success'}`}
                            onClick={() => handleComplete(note.id)}
                            >
                            {`${note.done ? undone : done}`}
                        </button>
                        
                        <button 
                            type="button" 
                            className="btn btn-outline-danger btn-sm"
                            onClick={() => onRemove(note.id)}>
                            &times;
                        </button>
                        </div>
                    </li>
                </CSSTransition>
            )})}
            
        </TransitionGroup>
    );
}

export default Notes;