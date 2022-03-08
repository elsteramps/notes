import React, {useContext} from 'react';
import { alertContext } from '../context/alert/alertContext';

function Alert() {

    const {alert, hide} = useContext(alertContext)

    if(!alert.visible){
        return null
    }
    
    return (
        <div className={`alert alert-${alert.type || 'warning'} alert-dismissible fade show`}>
            {alert.text}
            <button onClick={hide} type="button" className="btn btn-close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
      </div>
    );
}

export default Alert;