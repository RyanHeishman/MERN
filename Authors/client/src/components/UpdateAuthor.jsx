import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const UpdateAuthor = (props) => {

    const [author, setAuthor] = useState({
        name: ''
    })

    const {id} = useParams();
    const navigate = useNavigate();
    const [errors, setErrors] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/${id}`)
        .then((res)=>{
            setAuthor(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [])

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/deleteAuthor/${id}`)
        .then((res)=>{
            navigate('/authors')
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/updateAuthor/${id}`, author)
        .then((res)=>{
            navigate('/authors')
        })
        .catch((err)=>{
            setErrors(err.response.data.errors)
        })
    }

    const handleAuthor = (e) => {
        setAuthor({...author, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Name: </label>
                    <input type="text" name="name" value={author.name} onChange={handleAuthor} />
                </div>
                <div>
                    <button type="submit">Update Author</button>
                    <button className="bg-danger" type="submit" onClick={() => deleteHandler(author._id)}>Adopt {author.name}</button>
                </div>
            </form>
        </div>
    )
}

export default UpdateAuthor;