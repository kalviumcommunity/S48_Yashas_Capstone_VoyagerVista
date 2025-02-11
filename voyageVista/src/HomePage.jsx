import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import thanjoreTemple from "./thanjore-temple.jpg"; // Ensure the image is in your project folder

const Home = () => {
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
    <Link to="/signup" className="btn signup-btn">Sign Up</Link>
    <Link to="/login" className="btn login-btn">Login</Link>
  </div>
</header>
      {/* Image Section with Overlay Text */}
      <div className="image-section">
        <img src={thanjoreTemple} alt="Thanjavur Temple" className="temple-image" />
        <section className="home-content">
          <h3>Voyager Vistha revolutionizes how you plan and experience your travels.</h3>
          <h3>We provide personalized trip planning tools, curated travel recommendations, and seamless booking options.</h3>
        </section>
      </div>

      <section className="features-container">
        <div className="features-heading">
          <h2>What We Provide</h2>
        </div>
        <div className="features-list">
          <ul>
            <li>Customized Trip Planning: Tailor your trips with ease using our smart destination planner.</li>
            <li>Accommodation Booking: Book hotels and other accommodations at the best prices.</li>
            <li>Tour Packages: Explore curated tour packages designed to give you the best travel experiences.</li>
            <li>User Reviews & Ratings: Get authentic feedback from fellow travelers.</li>
            <li>Local Event & Festival Calendar: Stay updated with events and festivals happening at your destination.</li>
            <li>Dynamic Pricing: Enjoy the best prices that adjust to your travel dates.</li>
            <li>Challenges for Tourists: Take part in fun and rewarding challenges during your travels.</li>
            <li>Emergency Assistance & Support: We're here to help in case of any emergency while traveling.</li>
            <li>Destination Discovery: Explore new destinations that match your travel interests and budget.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Home;