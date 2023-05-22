// import Button from "@/components/Button";
// import { deleteToken } from "@/redux/slice/slice-token";
import React from "react";
import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";

export default function NavEnd({ isToken }) {
  // const dispatch = useDispatch();
  // const { totalQuantity, subTotal } = useSelector((state) => state.cart);
  return isToken ? (
    <>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src="https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg" />
          </div>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          {/* <li>
            <a onClick={() => dispatch(deleteToken())}>Logout</a>
          </li> */}
        </ul>
      </div>
    </>
  ) : (
    <div className="navbar-end">
      <Link className="btn" to="/signin">
        Login
      </Link>
    </div>
  );
}
