import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import thanjoreTemple from "./thanjore-temple.jpg";

const Web = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <div className="header-left">
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <h1>Voyager Vistha</h1>
          </Link>
          <p>Your ultimate destination for hassle-free travel planning.</p>
        </div>
        <div className="header-right">
          <Link to="/signup" className="btn signup-btn">Know More About Us</Link>
          <Link to="/login" className="btn login-btn">Your Profile</Link>
        </div>
      </header>
      {/* Image Section */}
      <div className="image-section">
        <img src={thanjoreTemple} alt="Thanjavur Temple" className="temple-image" />
      </div>
      {/* Removed additional content (e.g., features section) */}
    </div>
  );
};

export default Web;
