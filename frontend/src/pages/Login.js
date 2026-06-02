import {useState} from "react";

import axios from "axios";

import {useNavigate} from "react-router-dom";
import '../App.css';

function Login(){

  const navigate = useNavigate();

  const [username,setUsername] = useState("");

  const [password,setPassword] = useState("");

  const loginUser = ()=>{

    axios.post(

      "http://127.0.0.1:8000/api/token/",

      {
        username,
        password
      }
    )

    .then(res=>{

      localStorage.setItem(
        "token",
        res.data.access
      );

      alert("Login Success");

      navigate("/");
    })

    .catch(()=>{

      alert("Invalid Credentials");
    })
  }

  return(

    <div className="login">

      <h2>Login</h2>

      <input

        placeholder="Username"

        onChange={(e)=>
          setUsername(e.target.value)
        }
      />

      <input

        type="password"

        placeholder="Password"

        onChange={(e)=>
          setPassword(e.target.value)
        }
      />

      <button onClick={loginUser}>

        Login

      </button>

    </div>
  )
}

export default Login;