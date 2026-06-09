import { useState,useEffect } from "react";
import axios from "axios";
import {useParams} from "react-router-dom"
import React from 'react'

function ProductDetails() {
    const {id}=useParams()
    const [product,setProduct]=useState({});
    useEffect(()=>{
        axios.get(`https://newecommerce-3.onrender.com/api/products/${id}`)
        .then(res=>{setProduct(res.data)
    })
    
        .catch(err=>{
        console.log(err);

    },[id]);
    if (!product){
        return <h1>loading...</h1>
    }
})
    return (
        <div style={{padding:"30px"}}>
            <img src={product.image} alt="" width="300"/>
            <h2>{product.price}</h2>
            <p>{product.description}</p>
            <p>{product.stock}</p>

            
        </div>
    )
}

export default ProductDetails;
