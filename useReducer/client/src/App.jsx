import { useState, useReducer } from 'react'
import './App.css'

const reducer = (state, action) => {
  console.log('******', state);
  console.log('dsfdsdf', action);

  switch(action.type) {
    case 'add':
      return [...state, {text: action.payload, completed:false}]
      case 'delete':
        return state.filter((item, index) => index !== action.payload)
  }
}


function App() {

  const [toDo, setToDo] = useState("")
  const [state, dispatch] = useReducer(reducer, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({type: 'add', payload: toDo})
  }

  const handleDelete = (index) => {
    dispatch({type: 'delete', payload: index})
  }

  return (
    <>
      <h1>ToDos with usereducer</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setToDo(e.target.value)} value={toDo}/>
        <button>Add</button>
      </form>
      {
        state.map((item, index) => {
          return <div key={index}>- {item.text} <button onClick={() => handleDelete(index)}>Delete</button></div>
        })
      }
    </>
  )
}

export default App
