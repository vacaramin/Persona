import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import { Provider } from 'react-redux'
import store from './store'

// styles
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
// pages
import Index from "views/Index.js";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      
      <Route path="/*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>
  </Provider>
);
