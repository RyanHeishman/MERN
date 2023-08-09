import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const ProductList = (props) => {

    // const {productArr, setProductArr} = props;

    const {prodList, setProdList} = props;
    
    
    useEffect(()=>{
        axios.get("http://localhost:8000/api/product/")
        .then((res)=>{
            console.log(res.data);
            // setProductArr(res.data);
            setProdList(res.data)
        })
        .catch((err)=>{
            console.log(err);
        })
    }, [])

    return (
        <div>
            <h2>All Products</h2>
            <hr />
            {
                prodList.map((prod)=>(
                    <div key={prod.id}>
                        {/* <p>Product: {prod.title}</p> */}
                        <Link to={`/product/${prod._id}`}>{prod.title}</Link>
                    </div>
                ))
            }
        </div>
    )
}

export default ProductList;