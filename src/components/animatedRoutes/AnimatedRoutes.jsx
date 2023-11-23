import React from "react";
import { Route, Routes, Link, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Dashboard from "../../pages/Dashboard";
import Leeds from "../../pages/Leeds";
import Payments from "../../pages/Payments";
import Units from "../../pages/Units";
import Login from "../../pages/Login";
function AnimatedRoutes() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/leeds" element={<Leeds />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/units" element={<Units />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default AnimatedRoutes;
