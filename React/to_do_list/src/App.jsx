import { useState } from 'react'
import './App.css'
import Form from './Components/Form'
import Display from './Components/Display'

function App() {
  const [taskList, setTaskList] = useState([])

  return (
    <>
      <Form
      taskList={taskList}
      setTaskList={setTaskList}/>

      <Display
      taskList={taskList}
      setTaskList={setTaskList}/>
    </>
  )
}

export default App
