import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/Form'
import Display from './components/Display'


function App() {
  
  const [boxColorArray, setBoxColorArray] = useState([]);
  return (
    <>
        <Form boxColorArray={boxColorArray} setBoxColorArray={setBoxColorArray}/>
        <Display boxColorArray={boxColorArray}/>
    </>
  )
}

export default App
