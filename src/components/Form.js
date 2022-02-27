import React, {useState, useContext} from 'react';
import { alertContext } from '../context/alert/alertContext';

function Form() {
    const [value, setValue] = useState('')
    const alert = useContext(alertContext)

    const submitHandler = e => {
        e.preventDefault();
        alert.show(value, 'success')
    }
    return (
        <form onSubmit={submitHandler}>
            <div className='form-group'>
                <input 
                type="text" 
                className='form-control'
                placeholder='Введите название заметки'
                value={value}
                onChange = {e => setValue(e.target.value)}>
                </input>
            </div>
        </form>
    );
}

export default Form;