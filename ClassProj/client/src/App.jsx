import React, { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import DisplayAll from './components/DisplayAll'
import ShowForm from './components/ShowForm'
import ShowOne from './components/ShowOne'
import Update from './components/Update'
import './App.css'

function App() {

  return (
    <>
      <h1>TvDb</h1>
      <BrowserRouter>
        <Routes>

          <Route element={<DisplayAll/>} path='/' />
          <Route element={<ShowForm/>} path='/show'/>
          <Route element={<ShowOne/>} path='/show/:id'/>
          <Route element={<Update/>} path='/updateShow/:id'/>
        
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
