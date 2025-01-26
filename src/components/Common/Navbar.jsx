import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  return (
    <div className="navbar bg-base-100 border border-b-black border-x-0 border-t-0 flex">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Apps</a>
              <ul className="p-2">
                <li>
                  <Link to="/task-management">Task Manager App</Link>
                </li>
                <li>
                  <Link to="/social-media">Social Media App</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/social-media">Social Media App</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl hidden lg:block pt-2.5">
          TWSM
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <details>
              <summary>Apps</summary>
              <ul className="p-2">
                <li>
                  <Link to="/task-management">Task Manager App</Link>
                </li>
                <li>
                  <Link to="/social-media">Social Media App</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link to="/social-media">Social Media App</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {!token ? (
          <div className="flex gap-4">
            <Link to="/login" className="btn border-black">
              Login
            </Link>
            <Link to="/signup" className="btn border-black">
              SignUp
            </Link>
          </div>
        ) : (
          <Link
            to="/"
            onClick={() => {
              localStorage.removeItem("token");
            }}
            className="btn border-black"
          >
            Logout
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
