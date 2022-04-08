import React, {useState} from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import { useAuth } from '../context/firebase/AuthContext';

function NavBar() {

    const[error, setError] = useState('')
    const {currentUser, logout} = useAuth()
    const navigate = useNavigate()

    async function handleLogOut(){
        setError('')

        try{
            await logout()
            navigate('/login')
        }catch{
            setError('Failed to log out')
        }
    }


    return (
        <nav className='navbar p-3 navbar-dark navbar-expand-lg bg-info'>
            <div className='navbar-brand'>
                Notes
            </div>
            <div className='navbarFlex'>
            <div>
                <ul className="navbar-nav links">
                <li className="nav-item">
                    <NavLink className="nav-link" to={'/home'} exact='true'>Main</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to={'/about'}>Info</NavLink>
                </li>
                </ul>
                </div>
                <div>
                <ul className="navbar-nav">
                <li className="nav-item">
                    <h6 className='nav-link'>Logged in as: {currentUser.email}</h6>
                </li>
                <li className="nav-item">
                    <NavLink className='nav-link' to={'/login'} onClick={handleLogOut}>Log out</NavLink>
                </li>
                </ul>
                </div>
                </div>
        </nav>
    );
}

export default NavBar;