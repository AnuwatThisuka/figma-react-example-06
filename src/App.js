import React from "react";
import Home from "./page/Home";
import About from "./page/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
function App() {
   return (
      <Router>
         <div className="app-container">
            <Navbar />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
         </div>
      </Router>
   );
}

export default App;
