import React from "react";
import Git from "../assest/image/github.svg";
import Dribble from "../assest/image/dribble.svg";
import Twitter from "../assest/image/twitter.svg";
import "./Footer.css";
function Footer() {
   return (
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
            <p>Code By Anuwat Thisuka</p>
         </div>
      </div>
   );
}

export default Footer;
