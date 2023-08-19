import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Register from './components/Register'
import HomePage from './components/HomePage'
import Login from './components/Login'

function App() {
  return (
    <>
      <h1>Hello</h1>
      <Routes>
        <Route index element={<Register/>}/>
        <Route element={<HomePage/>} path='/homepage'/>
        <Route element={<Login/>} path='/login'/>
      </Routes>
    </>
  )
}

export default App
