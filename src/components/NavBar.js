import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../components/style.css";

const NavBar = () => {
  const [click, setClick] = useState(false);
  return (
    <>
      <nav className="cs-container">
        <NavLink to="/">
          <img className="cs-logo" src="logo1.png"></img>
        </NavLink>
        <ul className={click ? "nav-menum" : "nav-menu"}>
          <li>
            <NavLink className="nav-item" to="/">
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-item" to="/about">
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-item" to="/blog">
              BLOG
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-item" to="/contact">
              CONTACT US
            </NavLink>
          </li>
        </ul>
        <div className="cs-mobilemenu" onClick={() => setClick(!click)}>
          <i className={click ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default NavBar;
