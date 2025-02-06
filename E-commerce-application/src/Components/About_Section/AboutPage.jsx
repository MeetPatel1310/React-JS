import React from "react";
import "../About_Section/About.css";

const AboutPage = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Don't render the modal if it's not open

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        
        <div className="fixed-about">
          <h2>About Us</h2>
          <button className="close-btn" onClick={onClose}>
            X
          </button>

         
        </div>

        <div className="model-content-section">
          <section>
            <h3>Our Story</h3>
            <p>
              Welcome to <strong>30 Dc Shop</strong>, where fashion meets
              comfort and quality! Founded in 2021, we aim to bring you the
              latest fashion trends at affordable prices. From casual wear to
              formal attire, our collection is designed to cater to every taste
              and occasion.
            </p>
            <p>
              What started as a small online store has now evolved into a brand
              that serves customers all over the country. We’ve built our
              reputation by offering top-notch customer service and high-quality
              garments that are designed with you in mind.
            </p>
          </section>

          <section>
            <h3>Our Mission</h3>
            <p>
              At <strong>30 DC Shop</strong>, our mission is simple: to
              offer stylish, comfortable, and affordable clothing that fits
              every individual’s unique style. We believe that everyone deserves
              to look and feel their best, no matter their budget.
            </p>
          </section>

          <section>
            <h3>Our Vision</h3>
            <p>
              We envision becoming the leading online destination for fashion,
              offering a wide variety of high-quality garments that meet the
              needs of modern shoppers. Our goal is to provide a seamless online
              shopping experience, ensuring our customers feel satisfied with
              every purchase.
            </p>
          </section>

          <section>
            <h3>Our Values</h3>
            <ul>
              <li>
                <strong>Quality:</strong> We only use the finest materials to
                ensure your clothes are comfortable and long-lasting.
              </li>
              <li>
                <strong>Customer Satisfaction:</strong> We put our customers
                first, offering hassle-free returns, fast shipping, and top-tier
                support.
              </li>
              <li>
                <strong>Style:</strong> Our designs are created to cater to all
                body types, giving you a wide range of choices to express your
                unique personality.
              </li>
              <li>
                <strong>Sustainability:</strong> We are committed to ethical
                production practices and are constantly working to reduce our
                environmental footprint.
              </li>
            </ul>
          </section>

          <section>
            <h3>Why Choose Us?</h3>
            <p>
              Our dedication to providing the best shopping experience is
              reflected in every part of our business. Here's why you'll love
              shopping with us:
            </p>
            <ul>
              <li>
                <strong>Wide Range of Products:</strong> From dresses, shirts,
                and trousers to accessories, we have something for everyone.
              </li>
              <li>
                <strong>Fast and Secure Shipping:</strong> We offer fast
                delivery, with tracking available so you can always know where
                your order is.
              </li>
              <li>
                <strong>Affordable Prices:</strong> We strive to provide the
                best quality at prices that won't break your budget.
              </li>
              <li>
                <strong>Excellent Customer Service:</strong> Our dedicated team
                is always ready to assist you with any questions or concerns you
                may have.
              </li>
            </ul>
          </section>

          <section>
            <h3>Customer Testimonials</h3>
            <p>
              Don’t just take our word for it! Here’s what our customers are
              saying:
            </p>
            <blockquote>
              “I absolutely love the quality of the clothes I purchased from
              Your Store Name! The fit is perfect, and they’re so comfortable.
              Plus, the delivery was super fast!” — <em>Sophie L.</em>
            </blockquote>
            <blockquote>
              “Great experience shopping here. The website is easy to navigate,
              and I found exactly what I was looking for. Will definitely be
              coming back!” — <em>Michael R.</em>
            </blockquote>
          </section>

          <section>
            <h3>Contact Us</h3>
            <p>
              If you have any questions or would like to learn more about our
              products, feel free to reach out to us. Our customer service team
              is always happy to assist.
            </p>
            <p>
              <strong>Email:</strong> support@yourstorename.com <br />
              <strong>Phone:</strong> +1 (555) 123-4567
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
