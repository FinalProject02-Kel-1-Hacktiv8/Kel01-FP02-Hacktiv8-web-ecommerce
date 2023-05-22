import React from "react";
import Navlink from "./Navlink";
import NavEnd from "./NavEnd";
import { Link } from "react-router-dom";

export default function NavbarComponent() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <Navlink item="Dashboard" to="/" isMobile />
          <Navlink item="Product" to="/product" isMobile />
          <Navlink item="Rekap" to="/rekap-penjualan" isMobile />
        </div>
        <Link className="normal-case text-xl" to="/">
          Toko Gally
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <Navlink item="Dashboard" to="/" />
        <Navlink item="Product" to="/product" />
        <Navlink item="Rekap" to="/rekap-penjualan" />
      </div>
      <div className="navbar-end">
        <NavEnd />
      </div>
    </div>
  );
}
