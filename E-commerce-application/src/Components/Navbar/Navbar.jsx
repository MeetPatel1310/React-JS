// import React from "react";
// import "../Navbar/Navbar.css";
// import logo from "../../assets/images/logo.png";
// import { Link, useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import AboutPage from "../About_Section/AboutPage";

// const Navbar = (props) => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("loggedIn");
//     navigate("/");
//   };

//   const [scrolled, setScrolled] = useState(false);
//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 1000);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

  
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // Function to open the modal
//   const handleAboutClick = (event) => {
//     event.preventDefault();  // Prevent navigation to the about page
//     setIsModalOpen(true);  // Open the modal
//   };

//   // Function to close the modal
//   const closeModal = () => {
//     setIsModalOpen(false);  // Close the modal
//   };

//   return (
//     <div>
//       {/* <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-default"> */}
//       <nav
//         className={`navbar navbar-expand-lg ${
//           scrolled ? "navbar-scrolled" : "navbar-default"
//         }`}
//       >
//         <div className="container-fluid " id="nav">
//           <a className="navbar-brand" href="#">
//             <img src={logo} alt="" />
//           </a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
//                 <Link to="#" className="nav-link active" aria-current="page">
//                   Home
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 {/* <a className="nav-link" href="#">Shop</a> */}
//                 <Link to className="nav-link">
//                   {" "}
//                   Shop
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 {/* <a className="nav-link" href="#">About</a> */}
//                 {/* <Link to="/about" className="nav-link" onClick={handleAboutClick}> About</Link> */}
//                 <Link to="#" className="nav-link" onClick={handleAboutClick}>
//                   About
//                 </Link>

//                 {/* Modal component */}
//                 <AboutPage isOpen={isModalOpen} onClose={closeModal} />
//               </li>

//               <li className="nav-item dropdown">
//                 <Link
//                   className="nav-link dropdown-toggle"
//                   href="#"
//                   role="button"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   Contact us
//                 </Link>
//                 <ul className="dropdown-menu">
//                   <li>
//                     <Link className="dropdown-item" href="#">
//                       Contact details
//                     </Link>
//                   </li>

//                   <li className="dropdown-item">
//                     <Link to="#" className="nav-link ">
//                       <button
//                         class="Logout-btn"
//                         onClick={handleLogout}
//                         type="button"
//                       >
//                         {" "}
//                         Log out{" "}
//                       </button>{" "}
//                     </Link>
//                   </li>
//                 </ul>
//               </li>
//               <li className="nav-item">
//                 <Link
//                   to="/cartPage"
//                   className="nav-link active"
//                   aria-current="page"
//                 >
//                   Cart<i class="bi bi-cart" style={{ padding: "0px 10px" }}></i>
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//       {/* {isAboutOpen && (
//         <div className="overlay">
//           <div className="popup">
//             <header>
//               <h1>About Us</h1>
//               <button onClick={closeModal}>X</button>
//             </header>
//             <article>
//               <p>
//                 Welcome to <strong>Your Store Name</strong> – your one-stop destination for
//                 high-quality, stylish garments that blend comfort, fashion, and affordability.
//               </p>
//               <p>
//                 At <strong>Your Store Name</strong>, we are passionate about delivering the
//                 latest trends in clothing directly to your doorstep.
//               </p>
//             </article>
//           </div>
//         </div>
//       )} */}
//     </div>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AboutPage from "../About_Section/AboutPage"; // Import the AboutPage modal
import logo from "../../assets/images/logo.png";
import "../Navbar/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    navigate("/");
  };

  // Scroll handler for changing navbar style
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 1000);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Modal state for AboutPage
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal when clicking "About"
  const handleAboutClick = (event) => {
    event.preventDefault();  // Prevent navigation to "/about"
    setIsModalOpen(true);  // Open the modal
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);  // Close the modal
  };

  return (
    <div>
      <nav className={`navbar navbar-expand-lg ${scrolled ? "navbar-scrolled" : "navbar-default"}`}>
        <div className="container-fluid" id="nav">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="#" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link">Shop</Link>
              </li>
              <li className="nav-item">
                {/* Clicking "About" opens the modal */}
                <Link to="#" className="nav-link" onClick={handleAboutClick}>
                  About
                </Link>

                {/* Modal component */}
                <AboutPage isOpen={isModalOpen} onClose={closeModal} />
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Contact us
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" href="#">
                      Contact details
                    </Link>
                  </li>

                  <li className="dropdown-item">
                    <Link to="#" className="nav-link ">
                      <button className="Logout-btn" onClick={handleLogout} type="button">
                        Log out
                      </button>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/cartPage" className="nav-link active" aria-current="page">
                  Cart <i className="bi bi-cart" style={{ padding: "0px 10px" }}></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
