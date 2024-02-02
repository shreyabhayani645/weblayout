import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";

import Home from './Home';
import Cake from './Cake';
import About from './About';
import Blog from './Blog';
import Contact from './Contact';


function App() {
  return (
    <>
    <div className='body'>
    <Routes>
      <Route path="/" element={ <Home></Home> }></Route>
      <Route path="/Cake" element={ <Cake></Cake>  }></Route>
      <Route path="/About" element={ <About></About> }></Route>
      <Route path="/Blog" element={ <Blog></Blog> }></Route>
      <Route path="/Contact" element={ <Contact></Contact> }></Route>
    </Routes>
    </div>
    </>    
  );
}

export default App;
