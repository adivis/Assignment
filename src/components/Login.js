import React from "react";
import { NavLink } from "react-router-dom";
import "./Signup.css";
// import { NavLink } from "react-router-dom";

function Signup() {
  return (
    <div className="signup">
      <div className="left">
        <NavLink to="/">
          <button>Create Account</button>
        </NavLink>
        <div className="form">
          <h1>Login</h1>
          <form action="/feed">
            <input type="text" placeholder="Email"></input>
            <input type="password" placeholder="Password"></input>

            <input className="btn" type="Submit" value="Login"></input>
          </form>
        </div>
      </div>
      <div className="right">
        <img src="./pablo-sign-in.png" />
      </div>
    </div>
  );
}

export default Signup;
