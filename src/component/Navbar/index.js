import React from "react";
import Navlink from "./Navlink";
import NavEnd from "./NavEnd";
// import { useSelector } from "react-redux";

export default function NavbarComponent() {
  // const { token } = useSelector((state) => state.users);
  // const { token } = useSelector((state) => state.users);

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
          <Navlink item="home" to="/" isMobile />
          <Navlink item="Product" to="/product" isMobile />
          <Navlink item="calaboration" to="/calaboration" isMobile />
          <Navlink item="checkout" to="/checkout" isMobile />
        </div>
        <a className="btn btn-ghost normal-case text-xl">Toko Gally</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <Navlink item="home" to="/" />
        <Navlink item="Product" to="/product" />
        <Navlink item="rekap" to="/rekap-penjualan" />
        <Navlink item="checkout" to="/checkout" />
      </div>
      <div className="navbar-end">
        <NavEnd />
        {/* {!token ? <NavEnd /> : <NavEnd isToken />} */}
      </div>
    </div>
  );
}