import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import EcommerceLayout from "../layout/SidebarProvider.jsx";
import Home from "../pages/Home.jsx";

export default function Ecommerce() {
  return (
    <>
      <Routes>
        <Route path="/" element={<EcommerceLayout />}>
          <Route index element={<Navigate to="home" replace />} />

          <Route path="home" element={<Home />} />
          
        </Route>
      </Routes>
    </>
  );
}
