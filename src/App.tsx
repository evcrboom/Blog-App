import React, { ReactElement } from 'react';
import './App.css';
import Home from './components/Home';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Blogs from './components/Blogs';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import Details from './components/Details';

function App():ReactElement {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/blogs' element={<Blogs />}></Route>
      <Route path='*' element={<NotFound />}></Route>
      <Route path='/home' element={<Navigate to="/" />}></Route>
      <Route path='/info' element={<Navigate to="/about" />}></Route>
      <Route path='/blogs/:id' element={<Details/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
