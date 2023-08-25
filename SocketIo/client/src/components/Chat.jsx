import React, {useState, useEffect} from 'react';

const Chat = ({username, socket}) => {
    const [users, setUsers] = useState([])
    // const [messages, setMessages] = useState([])
    // const [input, setInput] = useState('')

    useEffect(() => {
        socket.on('new-user', data => {
            console.log(data);
            setUsers(data.users)

        })
    }, [])

    return (
        <div>
            <h1>Chat with any of these users</h1>
            <ul>
                {users.map((user, i) => {
                    return <li key={i}>{user.name}</li>
                })}
            </ul>
        </div>
)}

export default Chat;