import Button from "@/components/Button";
import { deleteToken } from "@/redux/slice/slice-token";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function NavEnd({ isToken, role }) {
  const dispatch = useDispatch();
  const { totalQuantity, subTotal } = useSelector((state) => state.cart);
  return isToken && role == "user" ? (
    <>
      <div className="dropdown dropdown-end mr-5">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <div className="indicator">
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
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            {totalQuantity === 0 ? (
              <></>
            ) : (
              <span className="badge badge-sm indicator-item">
                {totalQuantity}
              </span>
            )}
          </div>
        </label>
        <div
          tabIndex={0}
          className="mt-3 card card-compact dropdown-content w-52 bg-[rgb(46,52,65)] shadow"
        >
          <div className="card-body">
            <span className="font-bold text-lg">{totalQuantity} Items</span>
            <span className="text-info">Subtotal: ${subTotal.toFixed(2)}</span>
            <div className="card-actions">
              <Link className="btn btn-primary btn-block" href={"/cart"}>
                View cart
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src="https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg" />
          </div>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[rgb(46,52,65)] rounded-box w-52"
        >
          <li>
            <a className="justify-between">
              Ghaly
              <span className="badge">User</span>
            </a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li>
            <a onClick={() => dispatch(deleteToken())}>Logout</a>
          </li>
        </ul>
      </div>
    </>
  ) : isToken && role == "admin" ? (
    <>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full ">
            <i className="fas fa-user-circle text-4xl"></i>
          </div>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[rgb(46,52,65)] rounded-box w-52"
        >
          <li>
            <a className="justify-between">
              Joni John
              <span className="badge">Admin</span>
            </a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li>
            <a onClick={() => dispatch(deleteToken())}>Logout</a>
          </li>
        </ul>
      </div>
    </>
  ) : (
    <>
      <div className="dropdown dropdown-end mr-5">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <div className="indicator">
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
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
        </label>
      </div>
      <div className="text-end">
        <Link className="btn" href="/signin">
          Login
        </Link>
      </div>
    </>
  );
}
