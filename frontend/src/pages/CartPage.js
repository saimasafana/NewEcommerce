import axios from "axios";
import {useEffect,useState} from "react";

import '../App.css';
function CartPage(){
    const[cart,setCart]=useState([]);

    const fetchCart=()=>{
         axios.get("https://newecommerce-3.onrender.com/api/cart/")
        .then(res=>setCart(res.data));

    }
    useEffect(()=>{
        fetchCart();
    },[]);

    const removeItem=(id)=>{
        axios.delete(`https://newecommerce-3.onrender.com/api/cart/${id}/`)
        .then (()=>{
            alert("item removed");
            fetchCart();
        })
    }

  return(
    <div className="cart-page">
        <h2>Cart items</h2>
        {cart.map(item=>(
            <div className="cart-item" key={item.id}>
                <img src={item.product_image} alt={item.product_name} width="250" height="250"/>
                <h1>{item.product_name}</h1>
                <h2>{item.product_price}</h2>
                <h3>product ID:{item.product}</h3>

                <p>Quantity:{item.quantity}</p>
                <button onClick={()=>removeItem(item.id)}>Remove</button>
            </div>
        ))}

    </div>
  )


}
export default CartPage;

