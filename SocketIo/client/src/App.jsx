import { useState, useEffect } from 'react'
import io from 'socket.io-client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Chat from './components/Chat'
function App() {
  const [socket] = useState(() => io(':8000'));
  const [username, setUsername] = useState('')
  const [isConnected, setIsConnected] = useState(socket.connected);

  useEffect(() => {
    console.log('connected');
    socket.on('connect', () => {
      console.log(socket.id);
      setIsConnected(true)
    })

    return () => {
      socket.disconnect(true)
    }
  }, [])

  return (
    <>
      <h1>Socket.io!</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login username={username} setUsername={setUsername} socket={socket} />} />
          <Route path="/chat" element={<Chat username={username} socket={socket} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App