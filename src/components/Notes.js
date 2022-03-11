import React from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group'

function Notes({notes, onRemove}) {

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
                </CSSTransition>
            )})}
            
        </TransitionGroup>
    );
}

export default Notes;