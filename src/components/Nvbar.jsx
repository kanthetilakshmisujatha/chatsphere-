import React from 'react'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { auth } from '../firebase'

const Nvbar = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogout = () => {
    signOut(auth).then(() => {
      // Redirect to the login page after successful logout
      navigate('/login');
    }).catch((error) => {
      console.log('Error during logout:', error);
      // Handle errors here if needed
    });
  };

  return (
    <div className="navbar">
      <span className="logo">ChatSphere</span>
      <div className='user'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzHMDlwRCHOHZP_tX7jRYNxV8W8MpNEog45w&usqp=CAU" alt=""/>
        <span className="s">Suji</span>
        <button className="b" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Nvbar;
