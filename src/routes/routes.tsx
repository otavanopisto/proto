// src/routes.tsx
import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MantineComponent from "../mantine";
import ChakraComponent from "../chakra";
import Home from "../home";

const AppRoutes = () => (
  <Router basename="/proto">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mantine" element={<MantineComponent />} />
      <Route path="/chakra" element={<ChakraComponent />} />
      {/* Add more routes as needed */}
    </Routes>
  </Router>
);

export default AppRoutes;
