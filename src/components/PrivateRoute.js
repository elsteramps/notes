import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/firebase/AuthContext'


export default function PrivateRoute({children}){
    const {currentUser} = useAuth();
    return currentUser.loggedin ? children : <Navigate to='/login'/>
}