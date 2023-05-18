import React from "react";
import Navlink from "./Navlink";
import NavEnd from "./NavEnd";

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
          <Navlink item="Home" href="/" isMobile />
          <Navlink item="Shop" href="shop" isMobile />
          <Navlink item="Calaboration" href="/calaboration" isMobile />
          <Navlink item="Checkout" href="/checkout" isMobile />
        </div>
        {/* LOGO */}
        <a className="btn btn-ghost normal-case text-xl text-purple-400">
          TOKOku.id
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <Navlink item="Home" href="/" />
        <Navlink item="Shop" href="/shop" />
        <Navlink item="Calaboration" href="/calaboration" />
        <Navlink item="Checkout" href="/checkout" />
      </div>
      <div className="navbar-end">
        <NavEnd isToken />
      </div>
    </div>
  );
}
