import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import AllAuthors from './components/AllAuthors'
import AuthorForm from './components/AuthorForm'
import UpdateAuthor from './components/UpdateAuthor'

function App() {

  return (
    <>
    <BrowserRouter>
      <h1>Favorite Authors</h1>
    <Routes>
      <Route element={<AllAuthors/>} path='/authors'/>
      <Route element={<AuthorForm/>} path='/authors/new'/>
      <Route element={<UpdateAuthor/>} path='/authors/:id/edit'/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
