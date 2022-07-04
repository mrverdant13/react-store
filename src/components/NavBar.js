import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './NavBar.css';

const homeRoute = '/';
const aboutRoute = '/about';

export default function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isInAbout = location.pathname === aboutRoute;

  return (
    <nav className="nav-bar">
      <div className="toolbar">
        <div
          className="nav-link"
          role="button"
          onClick={() => navigate(homeRoute)}
        >
          Home
        </div>
        {!isInAbout && (
          <div
            className="nav-link"
            role="button"
            onClick={() => navigate(aboutRoute)}
          >
            About
          </div>
        )}
      </div>
    </nav>
  );
}
