import {Link,useNavigate} from "react-router-dom";
import '../App.css';




function Navbar(){
const navigate=useNavigate();
const logoutUser=()=>{
    localStorage.removeItem('token');
    navigate("/login");
}
    return(
        <div className="navbar">
            <h1>ShopEasy New</h1>
            
<div className="navlink">
                <Link to="/">
                <span>Home</span>
                </Link>

                <Link to="/cart">
                <span>Cart🛒</span>
                </Link>

                <Link to="/admin">
                <span>Admin</span>
                    </Link>
                    <button onClick={logoutUser}>Logout</button>
        </div>
        
        </div>

    );
};
export default Navbar;