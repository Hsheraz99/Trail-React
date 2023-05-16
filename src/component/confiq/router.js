import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import About from "../../pages/about";
import Home from "../../pages/home";
import Service from "../../pages/services";
import Check from "../../pages/Check"




export default function AppRouter() {
  return (
    <Router>
    <Routes>
  <Route   path="/about" element={<About />}/>
  <Route   path="/home" element={<Home/>}/>
  <Route   path="/service" element={<Service />}/>
  <Route   path="/check" element={<Check/>}/>
  





    </Routes> 
    </Router>
  );
}