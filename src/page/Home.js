import React from "react";
import "./Home.css";

function Home() {
   return (
      <div className="home">
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
      </div>
   );
}

export default Home;
