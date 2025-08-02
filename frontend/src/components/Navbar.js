import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const isLoggedIn = !!localStorage.getItem('token');

  return (
    <nav>
      <Link to="/dashboard">Dashboard</Link>
      {isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <>
          <Link to="/">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  );
}
