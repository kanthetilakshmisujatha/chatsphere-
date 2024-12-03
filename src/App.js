import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Registration from './components/pages/Registration';
import Chats from './components/Chats';
import Search from './components/Search';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Registration Page */}
        <Route path="/register" element={<Registration />} />
        
        {/* Login Page */}
        <Route path="/login" element={<Login />} />
        
        {/* Home Page */}
        <Route path="/home" element={<Home />} />
        
        {/* Redirect from root to registration */}
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/" element={<Search />} />
        <Route path="/chats/:userId" element={<Chats />} /> </Routes>
    </Router>
  );
};

export default App;
