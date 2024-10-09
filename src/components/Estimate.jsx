// Estimate.js
import React, { useState } from 'react';
import './Estimate.css'; // Make sure to create and style this CSS file

const Estimate = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to backend or email)
    alert('Your estimate request has been submitted!');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      message: '',
    });
  };

  return (
    <div className="estimate-section">
      <h2>Request an Estimate</h2>
      <form className="estimate-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        
        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>
        
        <label>
          Project Type:
          <select
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            required
          >
            <option value="">--Select a Project Type--</option>
            <option value="Painting">Painting</option>
            <option value="Woodwork">Woodwork</option>
            <option value="Power Wash">Power Wash</option>
            <option value="other">Other</option>
          </select>
        </label>
        
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
          ></textarea>
        </label>
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Estimate;
