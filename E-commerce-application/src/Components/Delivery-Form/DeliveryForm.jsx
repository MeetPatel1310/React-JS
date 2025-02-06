import React from "react";
import "../Delivery-Form/Delivery-form.css";
import { useForm } from "react-hook-form";
import logo from "../../assets/images/logo.png"
import { useSelector,useDispatch } from "react-redux";
import { useState } from "react";
import {  Navigate, useNavigate } from 'react-router-dom';
import { clearCart } from "../../Redux/counter/cartSlice"; 


const DeliveryForm = () => {

  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const dispatch=useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    setShowPopup(true);

    // let userDeliveryData = data;
  };

  const closePopup = () => {
    setShowPopup(false);
    navigate("/home")
    dispatch(clearCart()); 
    // dispatch(null)
  };

   // Watch specific fields or all fields
   const name = watch("name"); // Watch the "name" input
   const mobileNum = watch("mobileNum"); // Watch the "mobileNum" input
   const email = watch("email"); // Watch the "email" input
   const address = watch("deliveryAddress");
   const pin = watch("pinCode");
  //  const allFields = watch(); // Watch all fields

   const invoiceItems = useSelector((state) => state.cart);

   const totalCost = invoiceItems.reduce((total, item) => {
    return total + parseFloat(item.price.replace("$", "")) * item.Qut;
  }, 0);

  const indianDate = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    
  });
  const timeStamp = Date.now();
  
 
  
  

  return (
    <div className="UserContainer">

      <div className="userInfo">
        
        <div className="invoiceContainer">
          <div className="invoicePage">
            
            <div className="companyInfo">
              <div className="companylogo">
                <img src={logo} style={{height:"70px"}} alt="" /> 
                
              </div>
              <div className="companyDetails">
                <p>Company Info <br/>
                <p>30dc@gmai.com</p> <br /> 
                <p>+91 702722 76215</p></p>
              </div>
              <div className="invoiceitem">
                <p>Order Date : <span>{indianDate}</span></p><br />
                <p>Invoice No : <span>{timeStamp}</span></p><br />
                <p>Order Id :</p>

              </div>
            </div>
            <hr />
            <div className="billingInfo">
              <div className="userId">
                <p>Bill To :  <span>{name}</span></p>
                <p>Mobile : <span>{mobileNum}</span></p>
                <p>Email : <span>{email}</span></p>
              </div>
              <div className="userDetails">

                <p>Address : <span className="deliveryAddress">{address}</span></p>
                <p>Pin code : <span>{pin}</span></p>
              </div>
            </div>
            <hr />
            <div className="invoiceData">
              <table>
              <thead>
                <tr style={{ borderBottom: "1px solid #ccc" }}>
                  <th>#</th>
                  <th>Item</th>
                  <th>Rating</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  
                  <th>Total</th>
                  
                </tr>
              </thead>
              <tbody>
                
                {invoiceItems && invoiceItems.length > 0 ? (
                  invoiceItems.map((item, index) => (
                    <tr key={index} style={{ borderBottom: "1px solid #ccc" }}>
                      <td>
                        {index+1}
                      </td>
                      <td>{item.productName}</td>
                      <td>{item.Rating}</td>
                      <td>{item.Qut}</td>
                      <td>{item.price}</td>

                      <td>
                        $
                        {(
                          parseFloat(item.price.replace("$", "")) * item.Qut
                        ).toFixed(2)}
                      </td>


                    </tr>
                    
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" style={{ textAlign: "center" }}>
                      Your cart is empty.
                    </td>
                  </tr>
                )}
                {/* Display Total Row */}
                {invoiceItems.length > 0 && (
                  <tr>
                    <td colSpan="5" style={{ textAlign: "right", fontWeight: "bold" }}>
                      Grand Total:
                    </td>
                    <td style={{ fontWeight: "bold" }}>
                      ${totalCost.toFixed(2)}
                    </td>
                  </tr>
                )}
              </tbody>
              </table>
            </div>
              <h6 className="compliment">"Thank you for Shopping with us"</h6>

            {/* <h1>Invoice</h1> */}
          </div>
        </div>
        <form
          className="delivery-form"
          action=""
          onSubmit={handleSubmit(onSubmit)}
        >
          <h3>Please, Provide your information</h3> 
          <input
            id="name"
            type="text"
            placeholder="Enter Your name"
            {...register("name", {
              required: { value: true, message: "Please! Enter your name" },
              pattern: {
                value: /^[A-Za-z\s.]+$/,
                message: "Please! Enter your proper name",
              },
              minLength: {
                value: 3,
                message: `Name shuold be alteast two letter long`,
              },
              maxLength: {
                value: 25,
                message: "Name shuold not be more than 20 letter long",
              },
            })}
            maxLength="25"
          />
          {errors.name && (
            <div className="D-form-invalid"> {errors.name.message} </div>
          )}
          

          <input
            id="mobileNum"
            // type="tel"
            placeholder="Mobile number"
            {...register("mobileNum", {
              required: {
                value: true,
                message: "Please! Enter your Mobile number",
              },
              pattern: {
                value: /^[0-9]{0,10}$/,
                message: "Please! Enter a valid mobile number",
              },
              minLength: {
                value: 10,
                message: "Number shuold not be more than 10 letter long",
              },
              
            })}
            maxLength="10"
          />
          {errors.mobileNum && (
            <div className="D-form-invalid"> {errors.mobileNum.message} </div>
          )}

          <input
            type="email"
            placeholder="Enter yor Email"
            {...register("email", {
              required: { value: true, message: "Please enter your email" },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Enter a valid email",
              },
            })}
          />
          {errors.email && (
            <div className="D-form-invalid"> {errors.email.message} </div>
          )}

          <input
            type="text"
            id="deliveryAddress"
            placeholder="Enter your delivery address"
            {...register("deliveryAddress", {
              required: { value: true, message: "Please enter your address" },
              pattern: {
                value: /^[A-Za-z0-9\s,.-/()#]+$/,
                message: "Please enter a valid address",
              },
              minLength: {
                value: 5,
                message: "Address should be at least 5 characters long",
              },
              maxLength: {
                value: 100,
                message: "Address should not exceed 100 characters",
              },
            })}
          />
          {errors.deliveryAddress && <div className="D-form-invalid">{errors.deliveryAddress.message}</div>}

          <input
            id="pinCode"
            placeholder="Enter your city pincode"
            {...register("pinCode", {
              required: { value: true, message: "Please enter your pin code" },
              pattern: {
                value: /^\d{6}$/,
                message: "Enter a valid pin code of your city",
              },
            })}
          />
          {errors.pinCode && (
            <div className="D-form-invalid"> {errors.pinCode.message} </div>
          )}

          <button id="submit-btn" type="submit" className="signup-submit">
            {" "}
            Submit{" "}
          </button>
        </form>
        {/* <h6>{userDeliveryData}</h6> */}
      </div>
        {showPopup && (
          <div className="popup-overlay">
            <div className="popup-box">
              <h2>Successful!</h2>
              <p>We will deliver your order as soon as possible.</p>
              <button onClick={closePopup} className="close-btn">Close</button>
            </div>
          </div>
        )}
    </div>
  );
};

export default DeliveryForm;
