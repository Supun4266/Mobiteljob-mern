import React, { useState } from 'react';

import Header from '../components/Header1'; // Adjust the path as needed
import '../styles/vacancy.css'; // Adjust the path as needed


const Vacancy = () => {
  const [formData, setFormData] = useState({
    nameInitials: '',
    fullName: '',
    gender: '',
    birthDate: '',
    email: '',
    contact: '',
    field: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <>
      <Header />
      <div className="application-container">
        <form className="application-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="job-title">Job Title</label>
            <span className="colon">:</span>
            <div className="input-field job-title">Web Development Trainee</div>
          </div>

          <div className="form-row">
            <label htmlFor="name-initials">Name with Initials</label>
            <span className="colon">:</span>
            <input
              type="text"
              id="name-initials"
              className="input-field"
              value={formData.nameInitials}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <label htmlFor="full-name">Full Name</label>
            <span className="colon">:</span>
            <input
              type="text"
              id="full-name"
              className="input-field"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <label htmlFor="gender">Gender</label>
            <span className="colon">:</span>
            <div className="select-wrapper">
              <select
                id="gender"
                className="input-field"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="" disabled>Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <label htmlFor="birth-date">Date of Birth</label>
            <span className="colon">:</span>
            <div className="date-input-wrapper">
              <input
                type="text"
                id="birth-date"
                className="input-field date-input"
                placeholder="DD/MM/YYYY"
                value={formData.birthDate}
                onChange={handleChange}
              />
              <span className="calendar-icon"><i className="far fa-calendar"></i></span>
            </div>
          </div>

          <div className="form-row">
            <label htmlFor="email">Email</label>
            <span className="colon">:</span>
            <input
              type="email"
              id="email"
              className="input-field"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <label htmlFor="contact">Contact Number</label>
            <span className="colon">:</span>
            <input
              type="tel"
              id="contact"
              className="input-field"
              value={formData.contact}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <label htmlFor="field">Field</label>
            <span className="colon">:</span>
            <div className="select-wrapper">
              <select
                id="field"
                className="input-field"
                value={formData.field}
                onChange={handleChange}
              >
                <option value="" disabled>Select field</option>
                <option value="it">Information Technology</option>
                <option value="engineering">Engineering</option>
                <option value="business">Business</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="form-row upload-section">
            <label htmlFor="cv-upload">Upload your CV here</label>
          </div>

          <div className="dropzone">
            <div className="dropzone-content">
              <div className="upload-icon">
                <i className="fas fa-cloud-upload-alt"></i>
              </div>
              <p className="dropzone-text">Drag&Drop files here</p>
              <p className="or-text">or</p>
              <button type="button" className="browse-btn">Browse Files</button>
              <input type="file" id="cv-upload" hidden />
            </div>
          </div>

          <div className="submit-row">
            <button type="submit" className="submit-btn">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Vacancy;