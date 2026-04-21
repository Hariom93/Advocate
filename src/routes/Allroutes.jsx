import { useEffect } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import OurTeam from "../pages/OurTeam";
import Contact from "../pages/Contact";
const Allroutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/OurTeam" element={<OurTeam/>}/>
      </Routes>
    </>
  );
};

export default Allroutes;
