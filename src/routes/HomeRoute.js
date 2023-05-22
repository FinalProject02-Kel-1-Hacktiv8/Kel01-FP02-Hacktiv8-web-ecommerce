import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home";

export default function HomeRoute() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}
