import React from "react";
import { NavLink } from "react-router";
import { FaGithub } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100  rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <NavLink to="/">
              <li>Home</li>
            </NavLink>
            <NavLink to="/apps">
              <li>Apps</li>
            </NavLink>
            <NavLink to="/instalation">
              <li>Instalation</li>
            </NavLink>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className=" flex items-center gap-3 font-medium nav-ul">
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="/apps">
            <li>Apps</li>
          </NavLink>
          <NavLink to="/instalation">
            <li>Instalation</li>
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        {" "}
        <a
          href="https://github.com/aanoman271"
          className="text-white btn bg-gradient-to-l from-[#632ee3] to-[#9f62f2]"
        >
          <FaGithub />
          Contribute
        </a>
      </div>
    </div>
  );
};

export default Navbar;
