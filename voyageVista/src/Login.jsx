import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import thanjoreTemple from "./thanjore-temple.jpg";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value.trim();
    const password = e.target.password.value;

    try {
      const response = await fetch("http://localhost:5001/api/users/get");
      const users = await response.json();
      const user = users.find(u => u.email === email && u.password === password);
      if (user) {
        console.log("Login successful", user);
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        navigate("/profile");
      } else {
        alert("Invalid email or password");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Error during login. Please try again later.");
    }
  };

  return (
    <div className="login-container">
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
      <div className="login-image-section">
        <img src={thanjoreTemple} alt="Thanjavur Temple" className="login-temple-image" />
        <section className="login-content">
          <h2>Welcome Back!</h2>
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" placeholder="Enter your password" required />
            </div>
            <div style={{ textAlign: 'right', marginBottom: 12 }}>
              <Link to="/forgot-password" style={{ fontSize: '0.95rem', color: '#4a90e2', textDecoration: 'underline' }}>Forgot Password?</Link>
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
