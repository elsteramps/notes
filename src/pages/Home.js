import React from 'react';
import Form from '../components/Form';
import Notes from '../components/Notes';

function Home() {

    const notes = new Array(3)
    .fill('')
    .map((_, i) => ({id: i, title: `Note ${i + 1}`}))

    return (
        <>
        <Form/>

        <hr className='mt-4 mb-4'/>

        <Notes notes = {notes}/>
        </>
    );
}

export {Home};