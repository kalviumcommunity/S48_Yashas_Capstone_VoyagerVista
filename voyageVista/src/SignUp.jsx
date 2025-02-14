import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";
import thanjoreTemple from "./thanjore-temple.jpg";

const Signup = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const number = e.target.number.value.trim();
    const password = e.target.password.value;
    const confirmPassword = e.target["confirm-password"].value;

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, number, password }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log("User created", data);
        navigate("/login");
      } else {
        console.error("Signup error:", data.message);
        alert(data.message);
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("Error during signup. Please try again.");
    }
  };

  return (
    <div className="signup-container">
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
      <div className="signup-image-section">
        <img src={thanjoreTemple} alt="Thanjavur Temple" className="signup-temple-image" />
        <section className="signup-content">
          <h2>Create Your Account</h2>
          <form className="signup-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" placeholder="Enter your full name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label htmlFor="number">Phone Number</label>
              <input type="text" id="number" name="number" placeholder="Enter your phone number" required />
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
