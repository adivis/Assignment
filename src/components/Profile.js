import React from "react";
import "./Profile.css";
import Follower from "./Follower";
import Following from "./Following";
import Feed from "./Feed";
function Profile() {
  function showFollow() {
    var follow = document.getElementById("follow-content");
    var post = document.getElementById("post-content");
    var following = document.getElementById("following-content");
    console.log("click");
    console.log(follow, post, following);
    follow.className = "show-content";
    post.className = "hide-content";
    following.className = "hide-content";
    var btnFollow = document.getElementById("Followers");
    var btnFollowing = document.getElementById("Following");
    var btnPost = document.getElementById("post");
    btnFollow.style.borderTop = "2px solid #707070";
    btnPost.style.borderTop = "none";
    btnFollowing.style.borderTop = "none";
  }
  function showPost() {
    var follow = document.getElementById("follow-content");
    var post = document.getElementById("post-content");
    var following = document.getElementById("following-content");
    console.log("click");
    console.log(follow, post, following);
    follow.className = "hide-content";
    post.className = "show-content";
    following.className = "hide-content";
    var btnFollow = document.getElementById("Followers");
    var btnFollowing = document.getElementById("Following");
    var btnPost = document.getElementById("post");
    btnPost.style.borderTop = "2px solid #707070";
    btnFollowing.style.borderTop = "none";
    btnFollow.style.borderTop = "none";
  }
  function showFollowing() {
    var follow = document.getElementById("follow-content");
    var post = document.getElementById("post-content");
    var following = document.getElementById("following-content");
    console.log("click");
    console.log(follow, post, following);
    follow.className = "hide-content";
    post.className = "hide-content";
    following.className = "show-content";
    var btnFollow = document.getElementById("Followers");
    var btnFollowing = document.getElementById("Following");
    var btnPost = document.getElementById("post");
    btnFollowing.style.borderTop = "2px solid #707070";
    btnFollow.style.borderTop = "none";
    btnPost.style.borderTop = "none";
  }
  return (
    <div className="profilepage">
      <div className="container">
        <div className="profile">
          <div className="profile-img">
            <div></div>
          </div>
          <div className="profile-desc">
            <h6>Arjun Reddy</h6>

            <p>Posts : 511 &emsp; Followers : 511 &emsp; Following : 511</p>
          </div>
        </div>
        <div className="details">
          <div className="btns">
            <div id="post">
              <button onClick={showPost}>
                <i className="fa-solid fa-table-cells"></i> Post
              </button>
            </div>
            <div id="Followers">
              <button onClick={showFollow}>
                <i className="fa-solid fa-users"></i> Followers
              </button>
            </div>
            <div id="Following">
              <button onClick={showFollowing}>
                <i className="fa-solid fa-users"></i> Following
              </button>
            </div>
          </div>
          <div id="post-content" className="show-content">
            <Feed />
          </div>
          <div id="follow-content" className="hide-content">
            <Follower />
          </div>
          <div id="following-content" className="hide-content">
            <Following />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
