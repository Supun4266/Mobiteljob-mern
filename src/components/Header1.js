import React, { useState } from 'react';
import'../styles/header1.css'; // Adjust the path as needed
import bg from '../assets/mobitel.png'; 

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="logo-section">
          <img src={bg} alt="SLT Mobitel Logo" className="logo" />
          <span className="program-title">Training Program</span>
        </div>
        <nav>
          <ul className="nav-links">
            <li><a href="#">Job status</a></li>
            <li className="separator">|</li>
            <li><a href="#">Apply for job</a></li>
            <li className="separator">|</li>
            <li><a href="#">Jobs for you</a></li>
            <li className="separator">|</li>
            <li><a href="/htmlpages/home.html">Home</a></li>
            <li className="separator">|</li>
            <li><a href="/htmlpages/login.html">Login</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;