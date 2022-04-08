import React, {useContext, useEffect} from 'react';
import Form from '../components/Form';
import Loader from '../components/loader';
import Notes from '../components/Notes';
import { FireBaseContext } from '../context/firebase/fireBaseContext';
import { alertContext } from '../context/alert/alertContext';
import NavBar from '../components/NavBar';
import Alert from '../components/Alert';
import { useAuth } from '../context/firebase/AuthContext';

function Home() {

    const {loading, notes, fetchNotes, removeNote, noteDone} = useContext(FireBaseContext)
    const alert = useContext(alertContext)
    const {currentUser} = useAuth()

    const deleteFunc = (id) =>{
        removeNote(id);
        alert.show(`Note was deleted`, 'warning')
    }

    useEffect(() => {
        fetchNotes()
    }, [])

    return (
        <>
        <NavBar/>
        <Alert/>
        <div className='container pt-4'>
        <Form/>

        <hr className='mt-4 mb-4'/>

        {loading
            ? <Loader/>
            :<Notes notes = {notes} onDone={noteDone} onRemove={deleteFunc}/>
        }
        </div>
        </>
    );
}

export {Home};