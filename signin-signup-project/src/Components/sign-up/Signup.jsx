import { useState } from "react";
import { useNavigate, Link} from "react-router-dom";
import "./Signup.css";
function Signup() {

  const navigate = useNavigate();
  const[input, setInput] = useState({
    email : "",
    password : ""

  })
  //to store value in local storage
  const handleSubmit = (e) => {

    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(input));
    navigate("/signin")
  }
  

  // const [email, setEmail] = useState('');
  // const [errorMessage, setErrorMessage] = useState('');

  // // Regular expression for email validation
  // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // const handleEmailChange = (e) => {
  //   const value = e.target.value;
  //   setEmail(value);

  //   // Validate email format
  //   if (value === '') {
  //     setErrorMessage('Email is required');
  //   } else if (!emailRegex.test(value)) {
  //     setErrorMessage('Invalid email format');
  //   } else {
  //     setErrorMessage('');
  //   }
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!errorMessage && email) {
  //     alert(`Email submitted: ${email}`);
  //   } else {
  //     alert('Please provide a valid email.');
  //   }
  // };

  return (
      <div className="signup">
            <h1 className="header">Sign up</h1>
            <form  onSubmit={handleSubmit}>

              <input type="email" name="email" value={input.email} onChange={(e)=>setInput({...input, [e.target.name] : e.target.value})} id="email" placeholder="Enter your email" />
              
              
              
              <input type="password" name="password" value={input.password} onChange={(e)=>setInput({...input, [e.target.name] : e.target.value})} id="password" placeholder="Create a password"/>

              <input type="password" id="password" placeholder="Confirm your password"/>

              <button type="submit">Sign-up</button>
              <p> Already have an account? <Link to="/signin" style={{color:"green"}} >Sign-in</Link></p>
            </form>
      </div>
   
  );
}
export default Signup
