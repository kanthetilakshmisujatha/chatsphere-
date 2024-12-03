import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import './Registration.css';

const Registration = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to the home page when the submit button is clicked
    navigate('/home');
  };

  return (
    <div className="fromContiner">
      <div className="fromWrapper">
        <span className="logo">Chatsphere</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor='file'>
            <img src="https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/upload-square-black-icon.svg" width="103px" height="50px" alt="" />
            <span><b>Add Files</b></span>
          </label>
          <button type="submit">Sign In</button>
        </form>
        <p>You don't have an account? <a href="/login">Login</a></p> {/* Link to registration page */}
      </div>
    </div>
  );
};

export default Registration;
