import React from "react";
import "./Navbar.css";

import { NavLink } from "react-router-dom";

function Navbar() {
  function changeFeed() {
    var usernav = document.getElementById("user");
    var feednav = document.getElementById("feed");
    var profilenav = document.getElementById("profile");
    feednav.style.color = "#FF748D";
    usernav.style.color = "grey";
    profilenav.style.color = "grey";
  }
  function changeUser() {
    var usernav = document.getElementById("user");
    var feednav = document.getElementById("feed");
    var profilenav = document.getElementById("profile");
    usernav.style.color = "#FF748D";
    feednav.style.color = "grey";
    profilenav.style.color = "grey";
  }

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
  function changeProfile() {
    var usernav = document.getElementById("user");
    var feednav = document.getElementById("feed");
    var profilenav = document.getElementById("profile");
    profilenav.style.color = "#FF748D";
    feednav.style.color = "grey";
    usernav.style.color = "grey";
  }
  return (
    <div className="nav" id="nav">
      <NavLink className="logo" to="/">
        TweeTX
      </NavLink>
      <div id="nav-links" className="nav-links">
        <NavLink to="/feed" onClick={changeFeed} id="feed">
          Feed
        </NavLink>
        <NavLink to="/user" onClick={changeUser} id="user">
          Users
        </NavLink>
        <NavLink to="/profile" onClick={changeProfile} id="profile">
          Profile
        </NavLink>
        <NavLink to="" className="icon" onClick={dropNav}>
          <i className="fa-solid fa-bars"></i>
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
