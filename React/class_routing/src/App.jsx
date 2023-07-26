import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Components/Home'
import LandingPage from './Components/LandingPage'
import Nav from './Components/Nav'
import './App.css'
import WordAndColor from './Components/WordAndColor'
import Form from './Components/Form'

function App() {


  return (
    <>
      <BrowserRouter>
        <Nav/>
        <Routes>

          {/* <Route index element={<LandingPage/>}/> */}
          <Route index element={<Form/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path='/dynamic/:word/:color' element={<WordAndColor/>}/>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
