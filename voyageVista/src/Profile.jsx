import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // For demo: get user from localStorage (or set a dummy user)
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (storedUser) {
      setUser(storedUser);
    } else {
      // If not logged in, redirect to login
      navigate("/login");
    }
  }, [navigate]);

  if (!user) return null;

  return (
    <div className="profile-container">
      <h2>Your Profile</h2>
      <div className="profile-details">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone Number:</strong> {user.number}</p>
      </div>
      <button className="btn logout-btn" onClick={() => {
        localStorage.removeItem("loggedInUser");
        navigate("/login");
      }}>Logout</button>
    </div>
  );
};

export default Profile;
