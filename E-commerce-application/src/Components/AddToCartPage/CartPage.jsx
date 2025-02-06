import React from "react";
import "../AddToCartPage/CartPage.css";
import { useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import f1 from "../../assets/images/features/f1.png";
import f2 from "../../assets/images/features/f2.png";
import f3 from "../../assets/images/features/f3.png";
import f4 from "../../assets/images/features/f4.png";
import f5 from "../../assets/images/features/f5.png";
import f6 from "../../assets/images/features/f6.png";
import pf1 from "../../assets/images/products/f1.jpg";
import pf2 from "../../assets/images/products/f2.jpg";
import pf3 from "../../assets/images/products/f3.jpg";
import pf4 from "../../assets/images/products/f4.jpg";
import pf5 from "../../assets/images/products/f5.jpg";
import pf6 from "../../assets/images/products/f6.jpg";
import pf7 from "../../assets/images/products/f7.jpg";
import pf8 from "../../assets/images/products/f8.jpg";
import pn1 from "../../assets/images/products/n1.jpg";
import pn2 from "../../assets/images/products/n2.jpg";
import pn3 from "../../assets/images/products/n3.jpg";
import pn4 from "../../assets/images/products/n4.jpg";
import pn5 from "../../assets/images/products/n5.jpg";
import pn6 from "../../assets/images/products/n6.jpg";
import pn7 from "../../assets/images/products/n7.jpg";
import pn8 from "../../assets/images/products/n8.jpg";

const CartPage = () => {
  // console.log(props.productName)
  const cartItems = useSelector((state) => state.cart);
    // Calculate total cost
    const totalCost = cartItems.reduce((total, item) => {
      return total + parseFloat(item.price.replace("$", "")) * item.Qut;
    }, 0);
    const navigate = useNavigate()
  const navigationToForm=()=>{
    if(cartItems.length>0){
      navigate("/deliveryForm")
    }
    else{
      alert("Your Cart is Empty")
    }

  }
  return (
    <div className="cart-page">
      <div className="cart-data">
        <h2> Iteams in your Carts</h2>
        <ul>
          {/* {products.map((product, index) => (
            <li key={index}>
              {" "}
              <strong>Name:</strong> : {product.productName},{" "}
              <strong>Price:</strong> {product.price},{" "}
              <strong>Quantity:</strong> {product.Qut}
              <hr />
            </li>
          ))} */}
        </ul>

        <table>
          <thead>
            <tr style={{ borderBottom: "1px solid #ccc" }}>
              <th>Image</th>
              <th>Item</th>
              <th>Rating</th>
              <th>Quantity</th>
              <th>Price</th>
              
              <th>Total</th>
              
            </tr>
          </thead>
          <tbody>
            {/* Example row */}
            {/* {products.map((product, index) => (
              <tr key={index} style={{ borderBottom: "1px solid #ccc" }}>
                <td><img src={product.Img} alt="" srcset="" /></td>
                <td >{product.productName}</td>
                <td>{product.price}</td>
                <td>{product.Qut}</td>
                <td>${parseFloat(product.price.replace('$', '')) * product.Qut}</td>
                <td>{product.Rating}</td>
              </tr> 
              
              ))}  */}
            {cartItems && cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <tr key={index} style={{ borderBottom: "1px solid #ccc" }}>
                  <td>
                    <img
                      src={item.Img}
                      alt={item.productName}
                      style={{ height: "auto" }} />
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
            {cartItems.length > 0 && (
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
        <div className="cart-btn-container">
        
          <Link className="cart-btn" to="/home"> <button > Go to home page</button>     </Link>
        <div className="cart-btn">
          <button onClick={()=>navigationToForm()} >Procced</button>  
        </div>
          
        </div>
      </div>
    </div>
  );
};

export default CartPage;
