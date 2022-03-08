import React, {useContext, useEffect} from 'react';
import Form from '../components/Form';
import Loader from '../components/loader';
import Notes from '../components/Notes';
import { FireBaseContext } from '../context/firebase/fireBaseContext';

function Home() {

    const {loading, notes, fetchNotes, removeNote} = useContext(FireBaseContext)

    useEffect(() => {
        fetchNotes()
    }, [])

    return (
        <>
        <Form/>

        <hr className='mt-4 mb-4'/>

        {loading
            ? <Loader/>
            :<Notes notes = {notes} onRemove={removeNote}/>
        }
        </>
    );
}

export {Home};