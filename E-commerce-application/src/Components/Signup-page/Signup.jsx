import { useState } from "react";
import { useNavigate, Link} from "react-router-dom";
import { useForm } from "react-hook-form";
import "./Signup.css";
function Signup() {

  const navigate = useNavigate();


  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) =>{ 
    localStorage.setItem("user", JSON.stringify(data));
    navigate("/")
    console.log(data) }

  return (
    
    <div className="container">
      <div className="signup">

        <p>Welcome !!!</p>
        <h2> Create your account</h2>
        <form action="" onSubmit={handleSubmit(onSubmit)}>

          <label htmlFor="name">Name</label>
          <input id="name"  type="text" placeholder="Enter your name" {...register("name", {required:{value:true, message: "Enter your name"}, 
          minLength:{value:3,message: `Name shuold be alteast two letter long`}, 
          maxLength:{value:20,message: "Name shuold not be more than 20 letter long"}} )}/>
          {errors.name && <div className="invalid"> {errors.name.message} </div>  }

          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="Enter your Email" {...register("email",
          {required: {value:true, message: "Please enter your email"}, 
          pattern: {value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message:"Enter the right email"}})} />
          {errors.email && <div className="invalid"> {errors.email.message} </div>}

          <label htmlFor="password">Password</label>
          <input id="password" type="password" placeholder="Create a password" {...register("password",
          {required:{value:true, message:"Create the password"},
           pattern:{value: /^[a-zA-Z0-9!@#\$%\^\&*_=+-]{5,12}$/g , message: "Password must have eight characters including one uppercase  letter, one lowercase letter, and one number or special character" }})} />
           {errors.password && <div className="invalid"> {errors.password.message} </div>}

          {/* <input className="confirm-password" type="password" placeholder="Confirm your password"  {...register("password")} /> */}

          <button type="submit" className="signup-submit"> Signup </button>

          <h3> Do you have a account? <Link to="/"> <span style={{ color: "orange" }} > Login </span></Link></h3>
        </form>
      </div>
  </div>
   
  );
}
export default Signup;
