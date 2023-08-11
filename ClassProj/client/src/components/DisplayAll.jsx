import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom'

const DisplayAll = (props) => {

    const [shows, setShows] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/show')
        .then((res)=>{
            setShows(res.data)
        })
        .catch((err)=>{
        console.log(err)
        })
    }, [])

    return (
        <div>
            <Link to='/show'>Add a Show</Link>
            <hr />
            {
                shows.map((show)=>(
                    <div key={show._id}>
                        <Link to={`/show/${show._id}`}><h3>{show.title}</h3></Link>
                        <p>{show.network}</p>
                        <p>{show.numOfSeasons}</p>
                        <hr />
                    </div>
                ))
            }
        </div>
    )
}

export default DisplayAll;