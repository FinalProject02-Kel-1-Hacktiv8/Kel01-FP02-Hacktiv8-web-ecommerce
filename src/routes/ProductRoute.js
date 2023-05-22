import React from "react";
import { Route, Routes } from "react-router-dom";
import Products from "../pages/Product";
import Update from "../pages/Product/update";

export default function ProductRoute() {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/update/:updateId" element={<Update />} />
    </Routes>
  );
}
