import React from 'react'
import "../Footer/footer.css"
import { Link } from 'react-router-dom';

import logo from "../../assets/images/logo.png"
import app from "../../assets/images/pay/app.jpg"
import Play from "../../assets/images/pay/play.jpg"
import pay  from "../../assets/images/pay/pay.png"
const Footer = () => {
  return (
    <div>
       <div class="row footer">
          <div class="col-md-4 img">
            <img src={logo} alt="" />
          </div>
          <div class="col-md-4 aboutinfo">
            <div class="row aboutinfochild">
              <div class="col-md-6">
                <h4>About</h4>
                <ul>
                  <li><Link to="" className='Link-item'>About Us</Link></li>
                  <li><Link to="" className='Link-item'>Delivery Information</Link></li>
                  <li><Link to="" className='Link-item'>Privacy Policy</Link></li>
                  <li><Link to="" className='Link-item'>Terms & Condition</Link></li>
                  <li><Link to="" className='Link-item'>Contact Us</Link></li>
                  
                </ul>
              </div>
              <div class="col-md-6 myaccount">
                <h4>My Account</h4>
                <ul>
                  <li><Link to="" className='Link-item'>Sign In</Link></li>
                  <li><Link to="" className='Link-item'>View Cart</Link></li>
                  <li><Link to="" className='Link-item'>My Wishlist</Link></li>
                  <li><Link to="" className='Link-item'>Track My Order</Link></li>
                  <li><Link to="" className='Link-item'>Help</Link></li>
                </ul>
              </div>
            </div>

          </div>
          <div class="col-md-4 installapp">
            <h4>Install App</h4>
            <p>From App Store or Google Play</p>
            <Link to = ""><img src={app} alt="" /></Link>
            <Link to = ""><img src={Play} alt=""/></Link>
            <p>Secured Payment Gateways</p>
            <Link to = ""><img src={pay} alt=""/></Link>

          </div>

        </div>

        <div class="row contact footer">
          <div class="col-md-12">
            <h4 >Contact</h4>
            <p><span>Address:</span> Wellington Road, Street 32. San Francisco</p>
            <p><span>Phone:</span> Wellington Road, Street 32. San Francisco</p>
            <p><span>Hours</span> 10:00 - 18:00. Mon - Sat</p>
            <h4 >Follow us</h4>
            <p><i class="bi bi-facebook"></i>
              <i class="bi bi-youtube"></i>
              <i class="bi bi-telegram"></i>
              <i class="bi bi-instagram"></i>
              <i class="bi bi-twitter"></i>
            </p>
          </div>
        </div>

    </div>
  )
}

export default Footer
