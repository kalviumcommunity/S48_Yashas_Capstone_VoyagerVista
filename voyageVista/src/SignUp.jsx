import React from "react";
import { Link } from "react-router-dom";
import "./SignUp.css"; // New CSS file for the signup page
import thanjoreTemple from "./thanjore-temple.jpg"; // Reuse the same image

const Signup = () => {
  return (
    <div className="signup-container">
      {/* Header */}
      <header className="signup-header">
  <div className="header-left">
    <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
      <h1>Voyager Vistha</h1>
    </Link>
    <p>Your ultimate destination for hassle-free travel planning.</p>
  </div>
  <div className="header-right">
    <Link to="/login" className="btn login-btn">Login</Link>
  </div>
</header>

      {/* Image Section with Overlay Form */}
      <div className="signup-image-section">
        <img src={thanjoreTemple} alt="Thanjavur Temple" className="signup-temple-image" />
        <section className="signup-content">
          <h2>Create Your Account</h2>
          <form className="signup-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" placeholder="Enter your full name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" placeholder="Enter your password" required />
            </div>
            <div className="form-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm your password" required />
            </div>
            <button type="submit" className="btn signup-submit-btn">Sign Up</button>
          </form>
          <p className="login-redirect">
            Already have an account? <Link to="/login">Login here</Link>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Signup;