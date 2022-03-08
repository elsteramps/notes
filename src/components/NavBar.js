import React from 'react';
import {NavLink} from 'react-router-dom';

function NavBar() {
    return (
        <nav className='navbar p-3 navbar-dark navbar-expand-lg bg-info'>
            <div className='navbar-brand'>
                Notes
            </div>
                <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" to={'/'} exact='true'>Main</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to={'/about'}>Info</NavLink>
                </li>
                </ul>
        </nav>
    );
}

export default NavBar;