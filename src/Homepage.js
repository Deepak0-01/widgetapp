import React from "react";
import "./Homepage.css";

function Homepage() {
  return (
    <div className="homepage">
      <div className="homepage_desc">
        <div className="homepage_content">
          <h1>A Unified E-KYC PLATFORM</h1>
          <br></br>
          <h3>
            Verify Your Customer{" "}
            <span style={{ color: "#FAB432" }}>
              <strong>Online</strong>
            </span>
          </h3>
        </div>

        <div className="homepage_btns">
          <button className="homepage_btn">
            <h4>Register</h4>
          </button>
          <button className="homepage_btn">
            <h4>Secure Login</h4>
          </button>
        </div>
      </div>
      <div className="homepage_img">
        <img src="homeimg.svg" alt="img" />
      </div>
    </div>
  );
}

export default Homepage;
