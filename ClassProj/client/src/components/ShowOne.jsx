import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const ShowOne = (props) => {

    const navigate = useNavigate()
    const {id} = useParams()
    const [show, setShow] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/show/${id}`)
        .then((res) => {
            setShow(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/deleteShow/${id}`)
        .then((res) => {
            navigate('/')
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <div>
            <h2>{show.title}</h2>
            <h6>Network: {show.network}</h6>
            <h6>Number of Seasons: {show.numOfSeasons}</h6>
            {
                show.stillOn ?
                <h6>Still On: Yes</h6> :
                <h6>Still On: No</h6>
            }
            <button type="submit" onClick={() => deleteHandler(show._id)}>Delete {show.title}</button>
            <Link to={`/updateShow/${show._id}`}>Update</Link>
        </div>
    )
}

export default ShowOne;