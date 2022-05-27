import React from "react";
import { NavLink } from "react-router-dom";
import "./Signup.css";
// import { NavLink } from "react-router-dom";

function Signup() {
  return (
    <div className="signup">
      <div className="left">
        <NavLink to="/login">
          <button>Login</button>
        </NavLink>
        <div className="form">
          <h1>Create Account</h1>
          <form action="feed">
            <input type="text" placeholder="Name"></input>
            <input type="text" placeholder="Email"></input>
            <input type="password" placeholder="Password"></input>
            <input type="password" placeholder="Confirm Password"></input>
            <input className="btn" type="Submit" value="Sign up"></input>
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
