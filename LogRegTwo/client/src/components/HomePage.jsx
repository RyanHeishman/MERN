import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const HomePage = (props) => {
    
    const navigate = useNavigate();

    const logoutUser = () => {
        axios.post('http://localhost:8000/api/logoutUser', {}, {withCredentials:true})
        .then((res)=>{
            navigate('/')
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    return(
        <div>
            <h1>You made it</h1>
            <button onClick={logoutUser}>Logout</button>
        </div>
    )
}

export default HomePage;