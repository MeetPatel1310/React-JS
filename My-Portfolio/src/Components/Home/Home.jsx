import React from "react";
import img1 from "../../assets/Img/User-img.png";
import { TypeAnimation } from "react-type-animation";
import { AiOutlineInstagram } from "react-icons/ai";
import { IoLogoFacebook, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

import Portfolio from "../Portfolio_Section/Portfolio";
import Experiance from "../Experiance/Experiance";
import Contact from "../Contact/Contact";
import Navbar from "../Navbar/Navbar";
import colorWheel from "../../assets/Img/colorWheel.png";
import "../../Components/Home/Home.css";
import { motion, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import About from "../About/About";

const Home = () => {
  const [theme, setTheme] = useState("[#ffa500]");
  const [rotatorTheme, setRotator] = useState("#ffa500");

  useEffect(() => {
    document.documentElement.style.setProperty("--primary-color", rotatorTheme);
  }, [rotatorTheme]);

  function handleGreen() {
    setTheme("green-500"); // Update to green
    setRotator("#22C55E");
  }
  function handleOrange() {
    setTheme("[#ffa500]");
    setRotator("#ffa500");
  }
  function handleBlue() {
    setTheme("blue-500");
    setRotator("#3B82F6"); 
  }
  function handleRed() {
    setTheme("red-500"); // Update to green
    setRotator("#ef4444");
  }

  const [isOpenColorPlate, setColorPlate] = useState(false);
  function handleColorTheme() {
    setColorPlate((prev) => !prev);
  }

  //For Animation
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false }); // Trigger animation on each scroll
  const [scale, setScale] = useState(1); // Initially, scale is 1

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // When the element is completely out of view
          if (!entry.isIntersecting) {
            setScale(0.5); // Scale down when element is not visible at all
          } else {
            setScale(1); // Scale back to 1 when the element is visible in any part
          }
        });
      },
      {
        threshold: 0.1, // Trigger when the element leaves the viewport completely
      }
    );

    const target = document.getElementById("about-section");
    if (target) {
      observer.observe(target);
    }

    // Cleanup the observer on component unmount
    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  const handleContact = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="mt-12 bg-slate-800 relative">
      <Navbar navTheme={rotatorTheme} />
      {/* <div className="flex gap-2 items-center  absolute right-0 pl-11 top-5 ">
        <div className={`${isOpenColorPlate ? "block" : "hidden"}  selectTheamMenu w-[15.75rem] h-[2.25rem] px-2 border border-white-600 rounded-lg  flex justify-between items-center shadow-[0_4px_6px_0] transition-transform duration-2000 ease-in-out 
        transform ${isOpenColorPlate ? "translate-y-0" : "translate--full"
        }`} >
          <div onClick={handleOrange} className="w-5 h-5  bg-[#ffa500] rounded-full cursor-pointer "></div>
          <div onClick={handleGreen} className="w-5 h-5  bg-green-600 rounded-full cursor-pointer "></div>
          <div onClick={handleBlue} className="w-5 h-5  bg-blue-600 rounded-full cursor-pointer "></div>
          <div onClick={handleRed} className="w-5 h-5  bg-red-600 rounded-full cursor-pointer "></div>
        </div>
        <div className="w-11 h-[2.25rem] flex items-center mr-5">
           <img onClick={handleColorTheme}  className="w-10 h-[2.25rem]" src={colorWheel} alt="color-plate"/>
        </div>
      </div> */}

      <div className="flex flex-col gap-2 items-center  absolute left-0 md:pl-11 pl-2 md:top-10 top-5" >
        {/* Transition Color Plate Menu */}
        <div className="w-11 h-[2.25rem] flex items-center ">
          <img onClick = {handleColorTheme} className="w-10 h-[2.25rem]" src={colorWheel} alt="color-plate"/>
        </div>
        <div className={`${isOpenColorPlate ? "block" : "hidden"} selectTheamMenu w-[2.25rem] h-[10.75rem] p-2 border border-white-600 rounded-lg flex flex-col justify-between items-center shadow-[0_4px_6px_0] transition-transform duration-1500 ease-in-out transform  ${isOpenColorPlate ? "translate-y-0" : "-translate-y-full"}`} >
          <div
            onClick={handleOrange}
            className="w-5 h-5 bg-[#ffa500] rounded-full cursor-pointer mb-2"
          ></div>
          <div
            onClick={handleGreen}
            className="w-5 h-5 bg-green-600 rounded-full cursor-pointer mb-2"
          ></div>
          <div
            onClick={handleBlue}
            className="w-5 h-5 bg-blue-600 rounded-full cursor-pointer mb-2"
          ></div>
          <div
            onClick={handleRed}
            className="w-5 h-5 bg-red-600 rounded-full cursor-pointer"
          ></div>
        </div>

        {/* Color Picker Icon */}

        
        
      </div>

      <motion.div
        ref={ref}
        className="p-5 rounded-lg mb-10 overflow-hidden"
        initial={{ opacity: 0, y: -100 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
      >
        <div className="text-white w-full md:flex md:flex-row justify-evenly items-center p-8 md:p-20 gap-8 flex flex-col">
          <div className="content flex flex-col w-full md:w-1/2 gap-5 pt-5 order-2 md:order-1  ">
            <TypeAnimation
              sequence={[
                "Welcome Here!",
                1000,
                "I'm Meet Patel",
                1000,
                "A Frontend Developer & Programmer.",
                1000,
              ]}
              wrapper="span"
              speed={20}
              className={`typedClass text-[2em] inline-block `}
              // style={{
              //   fontSize: "2em",
              //   display: "inline-block",
              //   color: rotatorTheme,
              // }}
              repeat={Infinity}
            />
            <p className={`text-xl md:2xl text-justify `}>
              I am a skilled and passionate web designer with experience in
              creating visually appealing and user-friendly websites.
            </p>
            <div className="availableOn flex flex-col">
              <p className="text-lg">Available on </p>
              <div className="icons flex pt-2 gap-2">
                <AiOutlineInstagram className="text-2xl hover:scale-110" />
                <IoLogoFacebook className="text-2xl hover:scale-110" />
                <IoLogoGithub className="text-2xl hover:scale-110" />
                <IoLogoLinkedin className="text-2xl hover:scale-110" />
              </div>
            </div>
            <button
              className={`btnThemeChanges w-auto self-start rounded-2xl  px-8 py-3 mt-2 hover:opacity-75 duration-300 hover:scale-105 font-semibold`}
              onClick={() => handleContact("contact")}
            >
              Contact me
            </button>
          </div>

          {/* Rotating border */}
          <div className="rotating-border order-1">
            <img
              src={img1}
              alt="Profile"
              className="rounded-full w-full h-full bg-none object-cover"
            />
          </div>
        </div>
      </motion.div>

      <div id="about">
        {/* Scroll Animation  */}
        {/* <motion.div
          ref={ref}
          className="p-5 rounded-lg mb-10"
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 1, x: -100 }}
          transition={{ duration: 2 }}
        >
          <About />
        </motion.div> */}
        <motion.div
          id="about-section" // The element to observe for scroll visibility
          initial={{ scale: 1 }} // Start with scale 1
          animate={{ scale }} // Animate scale based on visibility
          transition={{ duration: 0.5 }} // Duration of the scaling effect
          className="text-[40px] "
        >
          <About colorTheme={rotatorTheme} />
        </motion.div>
      </div>

      <div id="projects">
        <motion.div
          initial={{ opacity: 0.7 }} // Start with opacity 0
          animate={{ opacity: 1 }} // End with opacity 1 (fully visible)
          transition={{ duration: 1 }} // Transition duration of 1 second
        >
          <Portfolio colorTheme={rotatorTheme} />
        </motion.div>
      </div>

      {/* <div id="experiance">
        <motion.p
          initial={{ opacity: 0, scale: 0.2 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-[40px] font-bold capitalize"
        >
          <Experiance />
        </motion.p>
      </div> */}
      <div id="experiance">
        <Experiance colorTheme={rotatorTheme}/>
      </div>
      <div id="contact">
        <Contact colorTheme={rotatorTheme} />
      </div>
    </div>
  );
};

export default Home;
