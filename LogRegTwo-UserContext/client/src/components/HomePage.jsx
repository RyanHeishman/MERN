import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../context/userContext";

const HomePage = (props) => {
    
    const navigate = useNavigate();
    const {loggedInUser, setLoggedInUser} = useContext(userContext);
    const id = window.localStorage.getItem('userId');

    useEffect(() => {
        axios.get(`http://localhost:800/api/loggedInUser/${id}`, {withCredentials: true})
        .then((res)=>{
            console.log(res);
            setLoggedInUser(res.data)
        })
        .catch((err)=>{
            console.log(err);
        })
    }, [])

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
            <h1>Hello {loggedInUser.firstName}</h1>
            <button onClick={logoutUser}>Logout</button>
        </div>
    )
}

export default HomePage;