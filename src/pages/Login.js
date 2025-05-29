import React, { useState } from 'react';
import axios from 'axios';
import loginImg from '../assets/login.png'; 
import { Link } from 'react-router-dom'; // For navigation
import '../styles/login.css'; // Import your existing CSS


function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/login', {
                email: formData.email,
                password: formData.password,
            });
            alert(response.data.message);
            // Optionally redirect to a dashboard or home page
            window.location.href = '/';
        } catch (error) {
            alert('Login failed: ' + (error.response?.data?.message || error.message));
        }
    };

    return (
        <div className="container">
            <div className="right-section">
                <div className="illustration">
                    <img src= {loginImg}  alt="Registration Illustration" />
                </div>
            </div>

            <div className="login-form">
                <h1>Login</h1>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email address :</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password :</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="submit" className="signin-btn">
                        Sign In
                    </button>
                </form>

                <div className="signup-link">
                    <span>Don't have an account? </span>
                    <Link to="/register">SignUp</Link>
                </div>

                <div className="social-login">
                    <a href="#" className="social-btn google">
                        <i className="fab fa-google"></i>
                    </a>
                    <a href="#" className="social-btn facebook">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Login;