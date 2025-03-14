import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
const menuLists = [ 
    <li><NavLink to="/">Home</NavLink></li>,
    <li><a>NPBS-1</a></li>,
    <li><a>Substaion</a></li>,
    <li><a>Adex</a></li>,
    <li><a>MCC1</a></li>,
    <li><a>MCC2</a></li>,
    <li><a>MCC3</a></li>,
    <li><a>E-Crane</a></li>,
    <li><NavLink to="/foundation">Foundation</NavLink></li>,
    <li><NavLink to="/foundation2">Foundation2</NavLink></li>,
]

    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
      {menuLists}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {menuLists}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
    );
};

export default Navbar;