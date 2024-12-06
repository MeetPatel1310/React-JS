import React, {useState} from "react";
import { useNavigate, Link} from "react-router-dom";
import "./Signin.css";
function Signin() {
  const navigate = useNavigate();

  // const handlesignup = () => {
  //   navigate("/signup");
  // };
  
  const[input, setInput] = useState({
    email : "",
    password : ""

  })

  const handleSignin = (e) => {

    e.preventDefault();
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    if(input.email === loggedUser.email && input.password === loggedUser.password){
      localStorage.setItem("loggedIn", true)
      navigate("/home")
    }
    else{
      alert("Please enter valid password or email")
    }
  }

  return (
    <div className="signinMainbody">
      <div className="signin">
        <h1 className="header">Sign in</h1>
        <form onSubmit={handleSignin}>
          <label htmlFor="email">Email or username</label>
          <input  name="email" value={input.email} onChange={(e)=>setInput({...input, [e.target.name] : e.target.value})} type="email" id="email" />

          <label htmlFor="password">Password</label>
          <input type="password" name="password" value={input.password} onChange={(e)=>setInput({...input, [e.target.name] : e.target.value})} id="password" />

          <button type="submit">Sign-in</button>
        </form>
        <p>
          Don't have an account?
          <Link to="/">
          <span style={{ color: "green" }} >
            sign-up
          </span>
          </Link>
        </p>
      </div>
    </div>
  );
}
export default Signin;
