import React from 'react';
import SignUp from './components/SignUp';
import {AuthProvider} from './context/firebase/AuthContext'
import Login from './components/Login';
import {Home} from './pages/Home';
import {About} from './pages/About';
import AlertState from './context/alert/AlertState';
import { FirebaseState } from './context/firebase/FirebaseState';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';


function App() {
    return (
      <>
          <FirebaseState>
            <AlertState>
            <AuthProvider>
          <BrowserRouter>
          <Routes>
                <Route path='/' element={<SignUp/>}/>
                <Route path='/login' element={<Login/>}/>
                 <Route path='/home' exact element = {<PrivateRoute><Home/></PrivateRoute>}/>
                  <Route path='/about' element = {<PrivateRoute><About/></PrivateRoute>}/>
          </Routes>
          </BrowserRouter>
          </AuthProvider>
          </AlertState>
          </FirebaseState>
      </>
    )
  }

export default App;
