import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";

// styles
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
// pages
import Index from "views/Index.js";
import projectSection from "components/Sections/projectSection";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/Persona" element={<Index />} />
      <Route path="/Projects" element={<projectSection />} />
      
      <Route path="/*" element={<Navigate to="/Persona" replace />} />
    </Routes>
  </BrowserRouter>
);
