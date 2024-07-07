import React, { useState } from 'react';

const Modals = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    message: ''
  });

  if (!isOpen) return null;

  const modalStyle = {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '1000' // Ensure it's above other content
  };

  const contentStyle = {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    maxWidth: '80%',
    maxHeight: '80%',
    overflow: 'auto',
    position: 'relative',
    textAlign: 'center'
  };

  const closeButtonStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    fontSize: '24px',
    cursor: 'pointer'
  };

  const closeButtonHoverStyle = {
    ...closeButtonStyle,
    color: '#0056b3' // Change color on hover
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box',
    fontSize: '16px'
  };

  const messageInputStyle = {
    ...inputStyle,
    height: '100px', // Adjust height for message textarea
    resize: 'vertical' // Allow vertical resizing
  };

  const submitButtonStyle = {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  };

  const submitButtonHoverStyle = {
    ...submitButtonStyle,
    backgroundColor: '#0056b3' // Change background color on hover
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission, e.g., send data to server or perform validation
    onClose(); // Close modal after submission
  };

  return (
    <div style={modalStyle}>
      <div style={contentStyle}>
        <span style={closeButtonStyle} onClick={onClose}>×</span>
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleInputChange}
            style={inputStyle}
            required
          />
          <br />
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            style={inputStyle}
            required
          />
          <br />
          <input
            type="email"
            name="emailAddress"
            placeholder="Email Address"
            value={formData.emailAddress}
            onChange={handleInputChange}
            style={inputStyle}
            required
          />
          <br />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleInputChange}
            style={messageInputStyle}
            required
          />
          <br />
          <button
            type="submit"
            style={submitButtonStyle}
            onMouseEnter={(e) => e.target.style = submitButtonHoverStyle}
            onMouseLeave={(e) => e.target.style = submitButtonStyle}
          >
            Submit
          </button>
        </form>
        <p>A member of our team will contact you soon.</p>
      </div>
    </div>
  );
};

export default Modals;
