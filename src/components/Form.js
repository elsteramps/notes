import React, {useState, useContext} from 'react';
import { alertContext } from '../context/alert/alertContext';
import { FireBaseContext } from '../context/firebase/fireBaseContext';

function Form() {
    const [value, setValue] = useState('')
    const alert = useContext(alertContext)
    const firebase = useContext(FireBaseContext)

    const submitHandler = e => {
        e.preventDefault();
        if(value.trim()){
            firebase.addNote(value.trim()).then(() => {
                console.log(alert)
                alert.show("Note was created", 'success')
                setTimeout(() => alert.hide(), 3000)
            }).catch(() => {
                alert.show('Oops... Smth went wroOong', 'danger')
                setTimeout(() => alert.hide(), 3000)
            })
            setValue("");
        }
        else{
            alert.show('Enter the note name')
        }
        
    }
    return (
        <form onSubmit={submitHandler}>
            <div className='form-group'>
                <input 
                type="text" 
                className='form-control'
                placeholder='Enter your note here'
                value={value}
                onChange = {e => setValue(e.target.value)}>
                </input>
            </div>
        </form>
    );
}

export default Form;