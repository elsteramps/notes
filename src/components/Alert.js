import React, {useContext} from 'react';
import { alertContext } from '../context/alert/alertContext';
import {CSSTransition} from 'react-transition-group'

function Alert() {

    const {alert, hide} = useContext(alertContext)
    
    return (
        <CSSTransition
        in={alert.visible}
        timeout={{
            enter: 500,
            exit: 200 
        }}
        classNames={'alert'}
        mountOnEnter
        unmountOnExit
        >
        <div className={`alert alert-${alert.type || 'warning'} alert-dismissible fade show`}>
            {alert.text}
            <button onClick={hide} type="button" className="btn btn-close">
            </button>
      </div>
      </CSSTransition>
    );
}

export default Alert;