import React from "react";
import "./Home.css";
import Git from "../assest/image/github.svg";
import Dribble from "../assest/image/dribble.svg";
import Twitter from "../assest/image/twitter.svg";
import { useState } from "react";
import { FiGithub, FiX, FiMenu } from "react-icons/fi";

function Home() {
   const [click, setClick] = useState(false);
   const handleClick = () => setClick(!click);
   const closeMobileMenu = () => setClick(false);

   return (
      <div className="home">
         <div className="navbar">
            <ul className={click ? "menu active" : "menu"}>
               <li className="menu-link" onClick={closeMobileMenu}>
                  <a href="#somthing">Home</a>
               </li>
               <li className="menu-link" onClick={closeMobileMenu}>
                  <a href="#somthing">About</a>
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
         <div className="container-home">
            <div className="container-home-main">
               <div className="header-home-hello">
                  <h1>Hey there</h1>
                  <p>I am Amirhossein</p>
               </div>
               <div className="header-home-second">
                  <p>
                     Lorem Ipsum is simply dummy text of the printing and
                     typesetting industry. Lorem Ipsum has been the industry's
                     standard dummy text ever since the 1500s, when an unknown
                     printer took a galley of type and scrambled it to make a
                     type specimen book.
                  </p>
               </div>
               <div className="btn-home">
                  <div className="btn-btn-aboutme">
                     <p>About Me</p>{" "}
                  </div>
                  <div className="btn-btn-let">
                     <p>Let’s see portfolios</p>
                  </div>
               </div>
            </div>
         </div>
         <div className="container-home-footer">
            <div className="copy">
               <p>Copyright © 2021 All rights reserved.</p>
            </div>
            <div className="img-link">
               <div className="git">
                  <a href="https://github.com/AnuwatThisuka">
                     <img src={Git} alt="" />
                  </a>
               </div>
               <div className="dribble">
                  <a href="https://www.dribble.com">
                     <img src={Dribble} alt="" />
                  </a>
               </div>
               <div className="twitter">
                  <a href="https://www.twitter.com">
                     <img src={Twitter} alt="" />
                  </a>
               </div>
            </div>
            <div className="coding">
               <p>
                  Code By Anuwat Thisuka <FiGithub />
               </p>
            </div>
         </div>
      </div>
   );
}

export default Home;
