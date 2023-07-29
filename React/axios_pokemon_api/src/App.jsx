import { useState, useEffect } from 'react'
import axios from 'axios'

import './App.css'

function App() {
  
  const [pokeName, setPokeName] = useState([]);

  useEffect(() => {

  },[])
  
  const getPokemon = () => {

    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
      .then((res) => {
        setPokeName(res.data.results);
      })
      .catch(err => console.log(err))
    }
  return (
    <>
      <h1>Hello</h1>
      <button onClick={getPokemon}>Click</button>
      {
        pokeName.map((char, i) => (
        <ul key={i}> 
        <li>Name: {char.name} </li>
        </ul>
      ))
    }
    </>
  )
}

export default App;
