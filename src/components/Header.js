import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../assets/mobitel.png'; 
import '../styles/aboutus.css'; 

function Header() {
    return (
        <header>
            <div className="header-container">
                <div className="logo-section">
                    <img src={bg} alt="SLT Mobitel Logo" className="logo" />
                    <span className="program-title">Training Program</span>
                </div>
                <nav>
                    <ul className="nav-links">
                        <li><Link to="/">Home</Link></li>
                        <li className="separator">|</li>
                        <li><Link to="/about">About Us</Link></li>
                        <li className="separator">|</li>
                        <li><Link to="/vacancycreate">Vacancies</Link></li>
                        <li className="separator">|</li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;