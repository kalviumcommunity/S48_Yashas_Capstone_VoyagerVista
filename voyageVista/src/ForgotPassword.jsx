import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5001/api/users/get");
      const users = await response.json();
      const user = users.find(u => u.name === name && u.email === email);
      if (user) {
        navigate("/edit-password", { state: { userId: user._id } });
      } else {
        setMessage("No matching user found. Please check your details.");
      }
    } catch (error) {
      setMessage("Error verifying user. Please try again later.");
    }
  };

  return (
    <div className="forgot-password-container" style={{ maxWidth: 400, margin: '40px auto', padding: '2rem', background: '#fff', borderRadius: 16, boxShadow: '0 4px 24px 0 rgba(0,0,0,0.08)', textAlign: 'center' }}>
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit} style={{ marginTop: 24 }}>
        <div className="form-group">
          <label htmlFor="forgot-name">Name</label>
          <input
            type="text"
            id="forgot-name"
            name="forgot-name"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="forgot-email">Email</label>
          <input
            type="email"
            id="forgot-email"
            name="forgot-email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <button type="submit" className="btn login-submit-btn" style={{ marginTop: 16 }}>Verify & Continue</button>
      </form>
      {message && <p style={{ marginTop: 24, color: '#4a90e2' }}>{message}</p>}

      <button className="btn" style={{ marginTop: 8 }} onClick={() => navigate('/login')}>Back to Login</button>
    </div>
  );
};

export default ForgotPassword;
