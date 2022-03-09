import React, {useContext, useEffect} from 'react';
import Form from '../components/Form';
import Loader from '../components/loader';
import Notes from '../components/Notes';
import { FireBaseContext } from '../context/firebase/fireBaseContext';
import { alertContext } from '../context/alert/alertContext';

function Home() {

    const {loading, notes, fetchNotes, removeNote} = useContext(FireBaseContext)
    const alert = useContext(alertContext)

    const deleteFunc = (id) =>{
        removeNote(id);
        alert.show('Note was deleted', 'warning')
        setTimeout(() => alert.hide(), 3000)
    }

    useEffect(() => {
        fetchNotes()
    }, [])

    return (
        <>
        <Form/>

        <hr className='mt-4 mb-4'/>

        {loading
            ? <Loader/>
            :<Notes notes = {notes} onRemove={deleteFunc}/>
        }
        </>
    );
}

export {Home};