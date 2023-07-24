import React, { useState } from 'react'
import {useNavigate, Link, Route, BrowserRouter, Routes} from 'react-router-dom';
import './App.css'
import Survey from './Components/Survey';
import Results from './Components/Results';

function App() {

  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/'element={<Survey />}/>

        <Route path='/results' element={<Results />}/>

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
