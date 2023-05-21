import Link from "next/link";
import React from "react";

export default function Navlink({ item, href, isMobile }) {
  if (isMobile) {
    return (
      <ul
        tabIndex={0}
        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <Link href={href}>{item}</Link>
        </li>
      </ul>
    );
  }

  return (
    <ul className="menu menu-horizontal px-1">
      <li>
        <Link href={href}>{item}</Link>
      </li>
    </ul>
  );
}
