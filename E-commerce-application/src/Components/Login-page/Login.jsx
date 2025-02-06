import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./Login.css";
function Login() {
  const navigate = useNavigate();


  const [isError, setIsError] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  
  const onSubmit = (data2) => {
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    if (data2.email === loggedUser.email && data2.Password === loggedUser.password) {
      localStorage.setItem("loggedIn", true);
      navigate("/home")
      
      // setIsError(false);
      
    } else {
      
      setIsError(true);
      alert("Please enter valid password or email")
    }
  };

 

  return (
    
    <div className="container">
      <div className="login">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            {...register("email", {
              required: {value:true, message: "Enter a email"},
              // pattern: {
              //   value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              //   message: "Invalid email address", // Error message for invalid pattern
              // }
              })} />
            {errors.email && <div className="invalid">{errors.email.message}</div>}

          <label htmlFor="Password">Paassword</label>
          <input
            type="Password"
            id="Password"
            placeholder="Enter your Password"
            {...register("Password", {
              required: {value:true, message:"Please enter a password"}, // Custom error message
              minLength:{value:5, message:"Password must have eight characters"}
            })} />
          {errors.Password && <div className="invalid">{errors.Password.message}</div>}
          {isError && <div className="invalid"> Please enter valid password or email </div>}

          <button type="submit" className="login-submit"> Login </button>

          <h3> Don't have an account? <Link to="/signup"> <span style={{ color: "orange" }} > Signup </span></Link></h3>
        </form>
      </div>
    </div>
  );
}
export default Login;
