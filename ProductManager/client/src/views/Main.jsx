import React, {useState} from "react";
import axios from "axios";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";

const Main = (props) => {

    // const [productArr, setProductArr] = useState([]);
    const [prodList, setProdList] = useState([]);


    return (
        <div>
            <ProductForm prodList={prodList} setProdList={setProdList}/>
            <hr />
            <ProductList prodList={prodList} setProdList={setProdList}/>
        </div>
    )
}

export default Main;