import React, { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

const Login = (props) => {
    const [userLogin, setUserLogin] = useState({
        email: '',
        password: '',
    })
    // const [errors, setErrors] = useState({})
    const navigate = useNavigate();

    const changeHandler = (e) => {
        setUserLogin({...userLogin, [e.target.name]:e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/loginUser', userLogin, {withCredentials: true})
        .then((res)=>{
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
                    <label htmlFor="">Email: </label>
                    <input type="email" value={userLogin.email} name="email" onChange={changeHandler} />
                </div>
                <div>
                    <label htmlFor="">Password: </label>
                    <input type="password" value={userLogin.password} name="password" onChange={changeHandler} />
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
                <Link to={"/"}>Don't have an account? Sign up here  </Link>
            </form>
        </div>
    )
}

export default Login;