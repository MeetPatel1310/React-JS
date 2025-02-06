import React from "react";
import Navbar from "./Navbar/Navbar";
// import { useState } from "react";
import Content from "./Hero_section-content/Content";
import Footer from "./Footer/Footer";

const Home = () => {
  // const [aboutPopup, setAbout] = useState(false);

  return (
    <div>
      
      <Navbar  />
      <Content />
     
      <Footer />
    </div>
  );
};

export default Home;
