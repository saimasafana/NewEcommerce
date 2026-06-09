import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from 'react'
import '../App.css';

function Orderpage() {
    const navigate=useNavigate()
    const[form,setForm]=useState({
        customer_name:"",
        address:"",
        phone:"",
        product:"",
        quantity:1,
        total:0

    })
    const handleChange=(e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }
    const placeOrder=()=>{
        axios.post("https://newecommerce-3.onrender.com/api/order/", form)
        .then(()=>{
            alert("order placed successfully");
            navigate("/");
        })
        .catch(err=>{
            console.log(err);
        })
    }
    
    return (
        <div className="order-page">
            <h1>place order</h1>
            <input type="text" name="customer_name"  placeholder="Ente name" onChange={handleChange}/>

            <input type="text" name="address"  placeholder="Ente address" onChange={handleChange}/>

            <input type="text" name="phone"  placeholder="Enter phone" onChange={handleChange}/>

            <input type="number" name="product"  placeholder="Ente product id" onChange={handleChange}/>
          <input type="number" name="total"  placeholder="Ente total" onChange={handleChange}/>
<button onClick={placeOrder}>Place Order</button>
        </div>
    )
}

export default Orderpage;
