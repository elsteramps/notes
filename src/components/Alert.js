import React from 'react';

function Alert({alert}) {
    return (
        <div className="alert alert-warning alert-dismissible">
            <strong>Holy guacamole!</strong> 
            {alert.text}
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
      </div>
    );
}

export default Alert;