import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Page/Home';
import Contact from './Page/Contact';
import Register from './Page/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <BrowserRouter>
      <>
      <div>
        <ul className= "navbar  navbar-light bg-light container-fluid justify-content-between ">
          <ul>
            <Link  className="navbar-brand " to="/">Home</Link>
          </ul> 
          <ul>  
            <Link className="navbar-brand" to="/Register">Register</Link>
          </ul>
          <ul>
            <Link className="navbar-brand" to="/Contact">Contact</Link>
          </ul>
        </ul>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Register" element={<Register/>} />
          <Route path="/Contact" element={<Contact/>} />
        </Routes>
      </div>
      </>
    </BrowserRouter>
  );
}

export default App;
