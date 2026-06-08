import axios from "axios";
import '../App.css';
import {useEffect,useState} from "react";

import ProductCard from "../components/ProductCard";

function Home(){

 const [products,setProducts]=useState([]);

 const [search,setSearch]=useState("");

 // FETCH PRODUCTS

 useEffect(()=>{

  axios.get(

   `http://127.0.0.1:8000/api/products/?search=${search}`

  )

  .then(res=>{

   setProducts(res.data);

  })

  .catch(err=>{

   console.log(err);

  })

 },[search]);

 // ADD TO CART

 const addToCart=(product)=>{

  axios.post(

   "http://127.0.0.1:8000/api/cart/",

   {
    product:product.id,
    quantity:1
   }

  )

  .then(()=>{

   alert("Added To Cart");

  })

  .catch(err=>{

   console.log(err);

  })

 }

 return(

  <div>

   {/* SEARCH BAR */}

   <div className="search-bar">

    <input

     type="text"

     placeholder="Search Products"

     value={search}

     onChange={(e)=>

      setSearch(e.target.value)

     }

    />

   </div>

   {/* PRODUCTS */}

   <div className="grid">

    {products.map(product=>(

      <ProductCard

       key={product.id}

       product={product}

       addToCart={addToCart}

      />

    ))}

   </div>

  </div>
 )
}

export default Home;