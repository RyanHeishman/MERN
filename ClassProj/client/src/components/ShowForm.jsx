import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ShowForm = (props) => {

    const [show, setShow] = useState({
        title: '',
        network: '',
        numOfSeasons: 0,
        stillOn: false
    })
    const [errors, setErrors] = useState({});
    const navigate = useNavigate()

    const handleShow = (e) => {
        if(e.target.type === 'checkbox'){
            setShow({...show, stillOn: e.target.type})
        }
        else{
            setShow({...show, [e.target.name]: e.target.value})
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/show', show)
            .then((res)=>{
                navigate('/')
            })
            .catch((err)=>{
                setErrors(err.response.data.errors)
            })
    }
    return (
        <div>
            <h3>Post a Show</h3>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="title">Show Title: </label>
                    <input type="text" value={show.title} onChange={handleShow} name="title"/>
                </div>
                {
                    errors.title ?
                    <p>{errors.title.message}</p>: null
                }
                <div>
                    <label htmlFor="network">Show Network: </label>
                    <input type="text" value={show.network} onChange={handleShow} name="network"/>
                </div>
                {
                    errors.network ?
                    <p>{errors.network.message}</p>: null
                }
                <div>
                    <label htmlFor="numOfSeasons">Number of Seasons: </label>
                    <input type="number" value={show.numOfSeasons} onChange={handleShow} name="numOfSeasons"/>
                </div>
                {
                    errors.numOfSeasons ?
                    <p>{errors.numOfSeasons.message}</p>: null
                }
                <div>
                    <label htmlFor="stillOn">Still On?: </label>
                    <input type="checkbox" checked={show.stillOn} onChange={handleShow} name="stillOn"/>
                </div>
                {
                    errors.stillOn ?
                    <p>{errors.stillOn.message}</p>: null
                }
                <button type="submit">Add Show</button>
            </form>
        </div>
    )
}

export default ShowForm;