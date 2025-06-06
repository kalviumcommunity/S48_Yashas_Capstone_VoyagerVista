import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const EditPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { userId } = location.state || {};

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }
    try {
      const response = await fetch(`http://localhost:5001/api/users/update/${userId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (response.ok) {
        setMessage("Password updated successfully!");
        setTimeout(() => navigate("/login"), 1500);
      } else {
        setMessage("Failed to update password");
      }
    } catch (error) {
      setMessage("Error updating password");
    }
  };

  if (!userId) {
    return <div>User not found. Please try again.</div>;
  }

  const handleDelete = async () => {
    if (!userId) return;
    try {
      const response = await fetch(`http://localhost:5001/api/users/delete/${userId}`, {
        method: "DELETE"
      });
      if (response.ok) {
        setMessage("Account deleted successfully!");
        setTimeout(() => navigate("/login"), 1500);
      } else {
        setMessage("Failed to delete account");
      }
    } catch (error) {
      setMessage("Error deleting account");
    }
  };

  return (
    <div className="edit-password-container" style={{ maxWidth: 400, margin: '40px auto', padding: '2rem', background: '#fff', borderRadius: 16, boxShadow: '0 4px 24px 0 rgba(0,0,0,0.08)', textAlign: 'center' }}>
      <h2>Edit Password</h2>
      <form onSubmit={handleSubmit} style={{ marginTop: 24 }}>
        <div className="form-group">
          <label htmlFor="new-password">New Password</label>
          <input
            type="password"
            id="new-password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Enter new password"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            placeholder="Confirm new password"
            required
          />
        </div>
        <button type="submit" className="btn login-submit-btn" style={{ marginTop: 16 }}>Update Password</button>
      </form>
      <button className="btn" style={{ marginTop: 16, background: '#e74c3c', color: '#fff' }} onClick={handleDelete}>Delete Account</button>
      {message && <p style={{ marginTop: 24, color: message.includes('success') ? '#27ae60' : '#e74c3c' }}>{message}</p>}
    </div>
  );
};

export default EditPassword;
