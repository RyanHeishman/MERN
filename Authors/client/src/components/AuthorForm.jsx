import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const AuthorForm = (props) => {

    const [author, setAuthor] = useState({
        name: ''
    })
    
    const navigate = useNavigate();
    const [errors, setErrors ] = useState({})

    const handleAuthor = (e) => {
        setAuthor({...author, [e.target.name]: e.target.value })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/author', author)
        .then((res)=>{
            navigate('/authors')
        })
        .catch((err)=>{
            setErrors(err.response.data.errors)
        })
    }

    return (
        <div>
            <form onClick={submitHandler}>
                <div>
                    <h3>Add a new author:</h3>
                </div>
                <div>
                    <label>Name: </label>
                    <input type="text" name="name" value={author.name} onChange={handleAuthor} />
                </div>
                {
                    errors.name ?
                        <p className="text-danger">{errors.name.message}</p> :
                        null
                }
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default AuthorForm;