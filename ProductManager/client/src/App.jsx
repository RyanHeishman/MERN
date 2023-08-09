import React, { useState } from 'react'
import axios from 'axios'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './views/Main';
import DisplayOneProduct from './components/DisplayOneProduct';
import './App.css'

function App() {

  return (
    <>
    <div>
    <BrowserRouter>
      <Routes>
        <Route element={<Main/>} path="/home" default/>
        <Route element={<DisplayOneProduct/>} path='/product/:id'/>
      </Routes>
    </BrowserRouter>
    </div>
    </>
  )
}

export default App
