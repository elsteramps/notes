import React from 'react';

function Form() {
    return (
        <form>
            <div className='form-group'>
                <input 
                type="text" 
                className='form-control'
                placeholder='Введите название заметки'>
                </input>
            </div>
        </form>
    );
}

export default Form;