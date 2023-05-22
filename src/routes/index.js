import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import GuestOnlyRoute from "../component/GuardOnlyRoute";
import GuardRoute from "../component/GuardRoute";

import ProductRoute from "./ProductRoute";
import Navbar from "../component/Navbar";
import HomeRoute from "./HomeRoute";
import RekapRoute from "./RekapRoute";

export function AppRoutes() {
  return (
    <Routes>
      <Route
        path="signin"
        element={
          <GuestOnlyRoute>
            <Login />
          </GuestOnlyRoute>
        }
      />

      <Route
        path="/"
        element={
          <div className="container mx-auto mt-10">
            <Navbar />
            <GuardRoute />
          </div>
        }
      >
        <Route path="dashboard/*" element={<HomeRoute />} />
        <Route path="product/*" element={<ProductRoute />} />
        <Route path="rekap-penjualan/*" element={<RekapRoute />} />
      </Route>
    </Routes>
  );
}
