import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Registration.css';
const Login = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for authenticating the user would go here
    // For now, we simply redirect to the home page
    navigate('/home');
  };

  return (
    <div className="fromContiner">
      <div className="fromWrapper">
        <span className="logo">Chatsphere</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button type="submit">Sign In</button>
        </form>
        <p>You don't have an account? <a href="/register">Register</a></p> {/* Link to registration page */}
      </div>
    </div>
  );
};

export default Login;
