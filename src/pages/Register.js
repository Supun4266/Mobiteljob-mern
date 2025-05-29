import React, { useState } from 'react';
import axios from 'axios';
import signupImg from '../assets/signup.png'; 
import '../styles/register.css'; // Import your existing CSS

function Register() {
    const [formData, setFormData] = useState({
        userId: '',
        name: '',
        password: '',
        confirmPassword: '',
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
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords don't match!");
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/api/register', {
                userId: formData.userId,
                name: formData.name,
                password: formData.password,
            });
            alert(response.data.message);
            // Optionally redirect to login page
            window.location.href = '/login';
        } catch (error) {
            alert('Registration failed: ' + (error.response?.data?.message || error.message));
        }
    };

    return (
        <div className="container">
            <div className="left-section">
                <div className="illustration">
                    <img src={signupImg} alt="Registration Illustration" />
                </div>
            </div>

            <div className="form-container">
                <h1 className="register-1">Register</h1>

                <form id="registration-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="user-id">User ID</label>
                        <input
                            type="text"
                            id="user-id"
                            name="userId"
                            value={formData.userId}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input
                            type="password"
                            id="confirm-password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="submit-container">
                        <button type="submit" className="submit-btn">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;