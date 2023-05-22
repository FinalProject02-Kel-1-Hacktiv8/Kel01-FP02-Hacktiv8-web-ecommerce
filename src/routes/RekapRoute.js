import React from "react";
import { Route, Routes } from "react-router-dom";
import RekapPenjualan from "../pages/Rekap";

export default function RekapRoute() {
  return (
    <Routes>
      <Route path="/" element={<RekapPenjualan />} />
    </Routes>
  );
}
