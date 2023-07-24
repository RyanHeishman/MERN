import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import './App.css'

// const Home = (props) =>{
//   return(
//     <div>
//       <h1 style={{color:"red"}}>Home Component</h1>
//       <Link to={"/about"}>About</Link>
//     </div>
//   )
// }

// const About = (props) =>{
//   return(
//     <div>
//       <h1 style={{color:"blue"}}>About Component</h1>
//       <Link to={"/"}>Home</Link>
//     </div>
//   )
// }

function App() {

  return (
    <>
      <BrowserRouter>
      <div>
        <Routes>

          <Route path="/" element={<Home />}/>

          <Route path="/about" element={<About />}/>



        </Routes>
      </div>  
      </BrowserRouter>
    </>
  )
}

export default App
