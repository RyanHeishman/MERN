import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DisplayOneProduct = (props) => {

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


    return (
        <div>
            <h1>Product: {pro.title}</h1>
            <h2>Price: {pro.price}</h2>
            <h3>Description: {pro.description}</h3>
        </div>
    )
}

export default DisplayOneProduct;