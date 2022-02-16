import React from "react";
import "./Home.css";
import Git from "../assest/image/github.svg";
import Dribble from "../assest/image/dribble.svg";
import Twitter from "../assest/image/twitter.svg";
function Home() {
   return (
      <div className="home">
         <div className="navbar">
            <ul>
               <li>
                  <a href="#somthing">Home</a>
               </li>
               <li>
                  <a href="#somthing">About</a>
               </li>
               <li>
                  <a href="#somthing">Contract</a>
               </li>
               <li>
                  <a href="#somthing">Portfolio</a>
               </li>
               <li>
                  <a href="#somthing">Journey</a>
               </li>
               <li>
                  <a href="#somthing">Blog</a>
               </li>
            </ul>
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
                  <img src={Git} alt="" />
               </div>
               <div className="dribble">
                  <img src={Dribble} alt="" />
               </div>
               <div className="twitter">
                  <img src={Twitter} alt="" />
               </div>
            </div>
            <div className="coding">
               <p>Code By Anuwat Thisuka</p>
            </div>
         </div>
      </div>
   );
}

export default Home;
