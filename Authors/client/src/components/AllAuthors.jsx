import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const AllAuthors = (props) => {

    const [authors, setAuthors] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/author')
        .then((res)=>{
            setAuthors(res.data)
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

    return (
        <div>
            <div>
                <Link to={'/authors/new'}>Add a new author</Link>
            </div>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Author Name</th>
                    <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    authors.map((author)=>(
                        <tr>
                            <td>{author.name}</td>
                            <td><Link to={`/authors/${author._id}/edit`}>Edit</Link></td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AllAuthors;