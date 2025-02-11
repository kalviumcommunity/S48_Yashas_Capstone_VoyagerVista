import React from "react";
import { Link } from "react-router-dom";
import "./Login.css"; // New CSS file for the login page
import thanjoreTemple from "./thanjore-temple.jpg"; // Reuse the same image

const Login = () => {
  return (
    <div className="login-container">
      {/* Header */}
      <header className="login-header">
  <div className="header-left">
    <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
      <h1>Voyager Vistha</h1>
    </Link>
    <p>Your ultimate destination for hassle-free travel planning.</p>
  </div>
  <div className="header-right">
    <Link to="/signup" className="btn signup-btn">Sign Up</Link>
  </div>
</header>

      {/* Image Section with Overlay Form */}
      <div className="login-image-section">
        <img src={thanjoreTemple} alt="Thanjavur Temple" className="login-temple-image" />
        <section className="login-content">
          <h2>Welcome Back!</h2>
          <form className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" placeholder="Enter your password" required />
            </div>
            <button type="submit" className="btn login-submit-btn">Login</button>
          </form>
          <p className="signup-redirect">
            Don't have an account? <Link to="/signup">Sign up here</Link>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Login;