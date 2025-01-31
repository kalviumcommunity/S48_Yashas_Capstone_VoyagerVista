import React from "react";
import { Link } from "react-router-dom";
import "./SignUp.css"; // Create a new CSS file for the SignUp page

const SignUp = () => {
  return (
    <div className="signup-container">
      <header className="home-header">
        <div className="header-left">
          <h1>Voyager Vistha</h1>
          <p>Your ultimate destination for hassle-free travel planning.</p>
        </div>
        <div className="header-right">
          <Link to="/signup" className="btn signup-btn">
            Sign Up
          </Link>
          <Link to="/login" className="btn login-btn">
            Login
          </Link>
        </div>
      </header>

      <main className="signup-main">
        <div className="signup-form-container">
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
              <input
                type="password"
                id="confirm-password"
                name="confirm-password"
                placeholder="Confirm your password"
                required
              />
            </div>
            <button type="submit" className="btn signup-submit-btn">
              Sign Up
            </button>
          </form>
          <p className="login-link">
            Already have an account? <Link to="/login">Login here</Link>.
          </p>
        </div>
      </main>
    </div>
  );
};

export default SignUp;