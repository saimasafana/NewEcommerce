
import axios from 'axios';
import '../App.css';
import { Link } from 'react-router-dom';
// const BASE_URL="http://127.0.0.1:8000";
function ProductCard({product,addToCart}){
    
    console.log("product data",product);
    const addToWishlist=(product)=>{
        axios.post(
    "https://newecommerce-3.onrender.com/api/wishlist/",
    {
        product: product.id
    }
)
        .then(()=>{
            alert("added to wishlist");
        })
        
        

    }
    return(
        <div>
    <div className="card">
        <Link to={`/product/${product.id}`}>
        <img src={product.image} alt="" style={{width:"200px",height:"200px"}}/>
        </Link>
        <h3>{product.name}</h3>
        <p> ₹{product.price}</p>
        <del>{product.old_price}</del>
        <br/>
        <button onClick={()=>addToCart(product)}>Add To Cart</button>
        

    </div>
            <button onClick={()=>addToWishlist(product)}>❤️WishList</button>
            <button><Link to="/order">order now</Link></button>
    </div>
    );
};
export default ProductCard;
