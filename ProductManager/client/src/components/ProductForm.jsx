import React, {useState} from 'react'
import axios from 'axios';

const ProductForm = (props) => {
    const {prodList, setProdList} = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    

    const onSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/product', {
            title,
            price,
            description
        })
        .then(res=>{
            console.log(res);
            console.log(res.data);
            setProdList([...prodList, res.data]);
        })
        .catch(err=>console.log(err))
    }

    return(
        <div>
            <form onSubmit={onSubmit}>
                <p>
                    <label htmlFor="">Title</label><br />
                    <input type="text" onChange={ (e)=>setTitle(e.target.value)} />
                </p>
                <p>
                    <label htmlFor="">Price</label><br />
                    <input type="number" onChange={ (e)=>setPrice(e.target.value)} />
                </p>
                <p>
                    <label htmlFor="">Description</label><br />
                    <input type="textarea" onChange={ (e)=>setDescription(e.target.value)} />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}

export default ProductForm;