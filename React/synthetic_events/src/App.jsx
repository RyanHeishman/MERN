import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>HEloo Heloo</h1>
      <button  onClick = { () => alert("This is a button")}>Click Me Cuh</button>
    </>
  )
}

export default App
