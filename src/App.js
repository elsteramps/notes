import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Home} from './pages/Home';
import {About} from './pages/About';
import NavBar from './components/NavBar';


function App() {
  return (
    <BrowserRouter>
          <NavBar/>
      <div className="container pt-4">
        <Routes>
          <Route path={'/'} exact element = {<Home/>}/>
          <Route path={'/about'} element = {<About/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
