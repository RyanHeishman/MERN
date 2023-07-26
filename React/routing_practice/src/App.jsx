import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Number from './components/Number'
import Word from './components/Word'
import WordColor from './components/WordColor'

function App() {


  return (
    <>
      <h1>Welcome</h1>
      <BrowserRouter>
      <Routes>
        <Route path='/number/:num' element={<Number/>}/>
        <Route path='/word/:word' element={<Word/>}/>
        <Route path='/:word/:color/:bgcolor' element={<WordColor/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
