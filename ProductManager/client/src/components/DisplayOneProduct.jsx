import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const DisplayOneProduct = (props) => {

    const navigate = useNavigate()
    const {id} = useParams()
    const [pro, setPro] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then((res) => {
            setPro(res.data)
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/deleteProduct/${id}`)
        .then((res) => {
            navigate('/')
        })
        .catch((err) => {
            console.log(err)
        })
    }


    return (
        <div>
            <h1>Product: {pro.title}</h1>
            <h2>Price: {pro.price}</h2>
            <h3>Description: {pro.description}</h3>
            <button onClick={() => deleteHandler(pro._id)}> Delete {pro.title}</button>
        </div>
    )
}

export default DisplayOneProduct;