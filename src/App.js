import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import Profile from "./components/Profile";
import Users from "./components/Users";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/user" element={<Users />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
