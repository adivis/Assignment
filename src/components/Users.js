import React from "react";
import "./Users.css";
import Follower from "./Follower";
import Following from "./Following";
function Users() {
  return (
    <div className="users">
      <Follower />
      <Following />
    </div>
  );
}

export default Users;
