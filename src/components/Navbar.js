import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FiX, FiMenu } from "react-icons/fi";

function Navbar() {
   const [click, setClick] = useState(false);
   const handleClick = () => setClick(!click);
   const closeMobileMenu = () => setClick(false);
   return (
      <div className="navbar">
         <div className="navbar-container">
            <ul className={click ? "menu active" : "menu"}>
               <li className="menu-link" onClick={closeMobileMenu}>
                  <Link to="/">Home</Link>
               </li>
               <li className="menu-link" onClick={closeMobileMenu}>
                  <Link to="/about">About</Link>
               </li>
               <li className="menu-link" onClick={closeMobileMenu}>
                  <a href="#somthing">Contract</a>
               </li>
               <li className="menu-link" onClick={closeMobileMenu}>
                  <a href="#somthing">Portfolio</a>
               </li>
               <li className="menu-link" onClick={closeMobileMenu}>
                  <a href="#somthing">Journey</a>
               </li>
               <li className="menu-link" onClick={closeMobileMenu}>
                  <a href="#somthing">Blog</a>
               </li>
            </ul>
            <div className="mobile-menu">
               <div className="click-menu-mobile" onClick={handleClick}>
                  {click ? <FiX /> : <FiMenu />}
               </div>
               <div className="header-home-main">
                  <h1>HOME</h1>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Navbar;
