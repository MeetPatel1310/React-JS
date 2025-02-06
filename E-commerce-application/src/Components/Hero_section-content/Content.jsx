import React, { useEffect, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useSelector, useDispatch } from 'react-redux'
import {addItem,decrement, increment} from "../../Redux/counter/cartSlice"

import "../Hero_section-content/Content.css";
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
import CartPage from "../AddToCartPage/cartPage";
import { configureStore } from "@reduxjs/toolkit";

const Content = React.memo(() => {
  const cart = useSelector((state) => state.cart)
  
  
  const dispatch=useDispatch();
 
  //     cart.map((items)=>{
  //   if(items.Qut===increment.Qut){
  //     var icmt=increment.Qut
      
  //   }
  // })
  
  const calculateRating = (rating) => {
    return Array.from({ length: rating }, (_, index) => (
      <i key={index} style={{ color: "goldenrod" }} className="bi bi-star-fill"></i>
    ));
  };
  
  // const [quantity, setQuantity] = useState(null);
  const [newArr, setNewArr] = useState([
    {
      productName: "adidas 1.0",
      productDesc: "Cartoon Astronaut Shirts",
      productImg: pf1,
      productRating: 4,
      productPrice: "$78",
      productQty: 1,
      // showControls:false
    },
    {
      productName: "Nike",
      productDesc: "Nike sport pro",
      productImg: pf2,
      productRating: 5,
      productPrice: "$89",
      productQty: 1,
    },
    {
      productName: "Adidas",
      productDesc: "Ultimate365 Performance Polo Shirt",
      productImg: pf3,
      productRating: 5,
      productPrice: "$99",
      productQty: 1,
    },
    {
      productName: "Puma1.0",
      productDesc: "Active Dry-Fit T-Shirt",
      productImg: pf4,
      productRating: 4,
      productPrice: "$69",
      productQty: 1,
    },
    
    {
      productName: "Puma 2.0",
      productDesc: "Active Dry-Fit T-Shirt",
      productImg: pf5,
      productRating: 4,
      productPrice: "$69",
      productQty: 1,
    },
    {
      productName: "Puma3.0",
      productDesc: "Active Dry-Fit T-Shirt",
      productImg: pf6,
      productRating: 5,
      productPrice: "$69",
      productQty: 1,
    },
    {
      productName: "Puma4.0",
      productDesc: "Active Dry-Fit T-Shirt",
      productImg: pf7,
      productRating: 3,
      productPrice: "$69",
      productQty: 1,
    },{
      productName: "Puma5.0",
      productDesc: "Active Dry-Fit T-Shirt",
      productImg: pf8,
      productRating: 4,
      productPrice: "$69",
      productQty: 1,
    }
  ]);


  
  useEffect(() => {
    console.log(typeof cart,cart); // This will log the updated `count` value when it changes
    // console.log(count)
  }, [cart]);

 

  let cartArr;
  const handleAddQut = (index,pprice,pName,pQut,pImg,pRating)=>{
    dispatch(addItem({productName: pName , price : pprice,Qut: pQut, Img:pImg, Rating:pRating}))
    // cartArr = [{productName: pName} , {price : pprice},{Qut: pQut}]
    setNewArr((prevArr) =>
      prevArr.map((item, i) =>
        i === index ? { ...item, showControls: true } : item
      )
    );

  }
  const Increment=(cart,pName)=>{
    console.log("cart", cart);
    cart.map((item)=>{
      if(item.productName==pName){
        dispatch(increment(item))
      }

    })

  }
  // const Increment =()=>{
  //   dispatch(increment(cart))
  // }
  const Decrement=(cart,pName)=>{
    console.log("cart", cart);
    cart.map((item)=>{
      if(item.productName==pName){
        dispatch(decrement(item))
      }

    })
  }
// const plus = (index) => {
  //   setNewArr((prevArr) =>
  //     prevArr.map((item, i) =>
  //       i === index && item.productQty <= 10 ? { ...item,productQty: item.productQty + 1  } : item
  //     )
  //   );
  // };
  
  // const minus = (index) => {
  //   setNewArr((prevArr) =>
  //     prevArr.map((item, i) =>
  //       i === index && item.productQty > 1 ? { ...item, productQty: item.productQty - 1 } : item
  //     )
  //   );
  // };
  return (
    <>
      <div class="container-fluid">
        <div class="row">
          <div class="col-12" id="content1">
            <h4>Trade-in-offer</h4>
            <h2>Super value deals</h2>
            <h1>On all products</h1>
            <p>save more coupons & up to 70% off!</p>
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <div class="row " id="features">
          <div class="col-2 shadow  mb-5 bg-body rounded">
            <img src={f1} alt="" />
            <p>Free Shiping</p>
          </div>
          <div class="col-2 shadow  mb-5 bg-body rounded">
            <img src={f2} alt="" />
            <p>online order</p>
          </div>
          <div class="col-2 shadow  mb-5 bg-body rounded">
            <img src={f3} alt="" />
            <p>save money</p>
          </div>
          <div class="col-2 shadow  mb-5 bg-body rounded">
            <img src={f4} alt="" />
            <p>promotions</p>
          </div>
          <div class="col-2 shadow  mb-5 bg-body rounded">
            <img src={f5} alt="" />
            <p>happy sell</p>
          </div>
          <div class="col-2 shadow  mb-5 bg-body rounded">
            <img src={f6} alt="" />
            <p>24/7 support</p>
          </div>
        </div>

        <div class="row" id="featuresproducts">
          <div class="col-12">
            <h1>Featured Products</h1>
            <p>Summer Collection New Morden Design </p>
          </div>
        </div>

        <div class="row" id="products">
          {newArr.map((item, index) => {
            return (
              <div key={index} class="col-3 shadow-sm mb-5 bg-body rounded">
                <img src={item.productImg} alt="" />
                <p>{item.productName}</p>
                <h6>{item.productDesc}</h6>

                <p>{calculateRating(item.productRating)}</p>
                <div className="addToCart">
                  <p> {item.productPrice} </p>
                  <h4 className="quantity">{item.quantity}</h4>
                  <div key={index} className="add-button">
                   {item.showControls ? (
                    // onClick={() => plus(index)}
                    // onClick={() => dispatch(increment())}
                    <><button onClick={() => Increment(cart,item.productName)}  className="plus">
                        +
                      </button>
                      
                      <button className="countResult">  {cart.find((cartItem) => cartItem.productName === item.productName)?.Qut || 0} </button>
                      
                      <button onClick={() => Decrement(cart,item.productName)} className="minus">
                          -
                        </button></> ):
                    <button  className="Add-btn"  onClick={()=>handleAddQut( index,item.productPrice, item.productName,item.productQty,item.productImg,item.productRating)}>
                    {/* // <button> */}
                       ADD <i className="bi bi-cart"></i>
                    </button> }
                  </div>
                </div>
              </div> 
            );
          })}
        </div>
        <div className="cartValue">
          {/* <CartPage products={cart} /> */}
        </div>

        {/* <div class="row" id="products">
          <div class="col-3 shadow-sm mb-5 bg-body rounded">
            <img src={pf5} alt="" />
            <p>adidas</p>
            <h6>Cartoon Astronaut T-Shirts</h6>
            <p>
              <i style={{ color: "goldenrod" }} class="bi bi-star-fill"></i>
              <i style={{ color: "goldenrod" }} class="bi bi-star-fill"></i>
              <i style={{ color: "goldenrod" }} class="bi bi-star-fill"></i>
              <i style={{ color: "goldenrod" }} class="bi bi-star-fill"></i>
              <i style={{ color: "goldenrod" }} class="bi bi-star-fill"></i>
            </p>
            <div className="addToCart">
              <p> $78 </p>
              <button>
                ADD <i className="bi bi-cart"></i>
              </button>
            </div>
          </div>
          
        </div> */}

        <div class="row" id="repaire">
          <div class="col-12" id="repaireservice">
            <p>Repaire Services</p>
            <h1>Up to 70% Off - All t-Shirts & Accessories</h1>
            <button>Explore more</button>
          </div>
        </div>

        <div class="row" id="featuresproducts">
          <div class="col-12">
            <h1>New Arrivals</h1>
            <p> Summer Collection New Morden Design </p>
          </div>
        </div>


        <div class="row deal" id="deals">
          <div class="col-6" id="leftcol-6">
            <p>crazy deals</p>
            <h2>buy 1 get 1 free</h2>
            <p>The best classic dress is on sale at coro</p>
            <span>
              <button>Learn More</button>
            </span>
          </div>

          <div class="col-6" id="rightcol-6">
            <p>crazy deals</p>
            <h2>upcomming season</h2>
            <p>The best classic dress is on sale at cara</p>
            <span>
              <button>Learn More</button>
            </span>
          </div>
        </div>

        <div class="row seasonalsale">
          <div class="col-4 leftcol-4">
            <h4>Winter Collection 50% Off</h4>
            <p>Winter Collection 50% Off</p>
          </div>
          <div class="col-4 middlecol-4">
            <h4>New Footware Collection</h4>
            <p>Spring/Summer 2022</p>
          </div>
          <div class="col-4 rightcol-4">
            <h4>T-SHIRTS</h4>
            <p>New Trendy Prints</p>
          </div>
        </div>
      </div>
    </>
  );
});


export default Content;
