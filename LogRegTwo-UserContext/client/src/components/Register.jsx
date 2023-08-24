import React, { useState, useContext } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../context/userContext";

const Register = (props) => {

    const {loggedInUser, setLoggedInUser} = useContext(userContext);
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const navigate = useNavigate();

    const changeHandler = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const submitHandler = (e) => {  
        e.preventDefault();
        axios.post('http://localhost:8000/api/registerUser', user, {withCredentials: true})
        .then((res)=>{
            setLoggedInUser(res.data)
            navigate('/homepage')
        })
        .catch((err)=>{
            // setErrors(errors.res.d)
            console.log(err);
        })
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="">First Name: </label>
                    <input type="text" value={user.firstName} name="firstName" onChange={changeHandler} />
                </div>
                <div>
                    <label htmlFor="">Last Name: </label>
                    <input type="text" value={user.lastName} name="lastName" onChange={changeHandler} />
                </div>
                <div>
                    <label htmlFor="">Email: </label>
                    <input type="email" value={user.email} name="email" onChange={changeHandler} />
                </div>
                <div>
                    <label htmlFor="">Password: </label>
                    <input type="password" value={user.password} name="password" onChange={changeHandler} />
                </div>
                <div>
                    <label htmlFor="">Confirm Password: </label>
                    <input type="password" value={user.confirmPassword} name="confirmPassword" onChange={changeHandler} />
                </div>
                <div>
                    <button type="submit">Register</button>
                </div>
                <Link to={"/login"}>Already have an account?</Link>
            </form>
        </div>
    )
}

export default Register;