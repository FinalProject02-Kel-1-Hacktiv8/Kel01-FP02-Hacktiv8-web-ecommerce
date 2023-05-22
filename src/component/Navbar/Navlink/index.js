import React from "react";
import { Link } from "react-router-dom";

export default function Navlink({ item, to, isMobile }) {
  if (isMobile) {
    return (
      <ul
        tabIndex={0}
        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <Link to={to}>{item}</Link>
        </li>
      </ul>
    );
  }

  return (
    <ul className="menu menu-horizontal px-1">
      <li>
        <Link to={to}>{item}</Link>
      </li>
    </ul>
  );
}
