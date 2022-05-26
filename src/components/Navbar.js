import React from "react";
import "./Navbar.css";

import { NavLink } from "react-router-dom";

function Navbar() {
  function dropNav(e) {
    e.preventDefault();
    // console.log("hello");
    var nav = document.getElementById("nav-links");

    if (nav.className === "nav-links") {
      nav.className = "responsive";
    } else {
      nav.className = "nav-links";
    }
    console.log(nav.className);
  }
  return (
    <div className="nav" id="nav">
      <NavLink className="logo" to="/">
        TweeTX
      </NavLink>
      <div id="nav-links" className="nav-links">
        <NavLink to="/">Feed</NavLink>
        <NavLink to="/user">Users</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="" className="icon" onClick={dropNav}>
          <i className="fa-solid fa-bars"></i>
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
