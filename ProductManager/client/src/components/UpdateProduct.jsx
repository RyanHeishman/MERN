import React, {useEffect, useState} from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const UpdateProduct = (props) => {
    const {prodList, setProdList} = props;
    
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    const [item, setItem] = useState({
        title: '',
        price: 0,
        description: ''
    })
    
    const navigate = useNavigate();
    const {id} = useParams()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then((res) => {
            setItem(res.data)
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])

    const onSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/editProduct/${id}`, {
            title,
            price,
            description
        })
        .then(res=>{
            console.log(res);
            console.log(res.data);
            navigate('/')
            setProdList([...prodList, res.data]);
        })
        .catch(err=>console.log(err))
    }

    return (
        <div>
            <h1>Update {item.title}</h1>
            <form onSubmit={onSubmit}>
                <p>
                    <label htmlFor="">Title</label><br />
                    <input type="text" placeholder={item.title} onChange={ (e)=>setTitle(e.target.value)} />
                </p>
                <p>
                    <label htmlFor="">Price</label><br />
                    <input type="number" placeholder={item.price} onChange={ (e)=>setPrice(e.target.value)} />
                </p>
                <p>
                    <label htmlFor="">Description</label><br />
                    <input type="textarea" placeholder={item.description} onChange={ (e)=>setDescription(e.target.value)} />
                </p>
                <button type="submit">Update</button>
            </form>
        </div>
    )
}

export default UpdateProduct;