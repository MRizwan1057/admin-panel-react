import React from "react";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import Footer from "./components/footer/footer";
import AnimatedRoutes from "./components/animatedRoutes/AnimatedRoutes";
import { motion } from "framer-motion";

function App() {
  return (
    <>
      <div className="container-fluid App">
        <div className="row ">
          <div className="col-md-2  px-0 sidebar">
            <Navbar />
          </div>

          <div className="col-md-10  px-0">
            <AnimatedRoutes />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
