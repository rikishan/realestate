import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';
import { Utils } from '../Utils'; // Adjust path as needed

const PropertyDetails = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  // Use property from Utils
  const property = Utils; // Assuming Utils is an array, adjust this based on your data structure

  // Function to handle next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % (property?.images?.length || 1));
  };

  // Function to handle previous image
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + (property?.images?.length || 1)) % (property?.images?.length || 1));
  };

  // Auto advance images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % (property?.images?.length || 1));
    }, 3000); // Change interval time as needed (in milliseconds)

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [property?.images?.length]); // Dependency array to ensure useEffect runs when images change

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      showModal();
    }, 5000); // 5000 milliseconds = 5 seconds

    // Cleanup function to clear timeout
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

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

    // Close modal after submission
    setOpen(false);
  };

  if (!property) {
    return null; // Add a loading state or handle case where property data isn't available
  }

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
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <div style={{ width: '100vw', maxWidth: '100%', height: '70vh', overflow: 'hidden', position: 'relative' }}>
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <img src={property.images[currentImageIndex]} alt="Property" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <button style={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)', backgroundColor: 'rgba(255, 255, 255, 0.5)', border: 'none', fontSize: '24px', cursor: 'pointer', zIndex: '10' }} onClick={prevImage}>{"<"}</button>
          <button style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)', backgroundColor: 'rgba(255, 255, 255, 0.5)', border: 'none', fontSize: '24px', cursor: 'pointer', zIndex: '10' }} onClick={nextImage}>{">"}</button>
        </div>
      </div>
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <h2>{property.title}</h2>
        <p>{property.description}</p>
        <p>Price: {property.price}</p>
        {/* Add more details as needed */}
      </div>
      {open && (
        <Modal
          open={open}
          title="Title"
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleInputChange}
                style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box', fontSize: '16px' }}
                required
              />
              <br />
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                style={{ ...inputStyle }}
                required
              />
              <br />
              <input
                type="email"
                name="emailAddress"
                placeholder="Email Address"
                value={formData.emailAddress}
                onChange={handleInputChange}
                style={{ ...inputStyle }}
                required
              />
              <br />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                style={{ ...messageInputStyle }}
                required
              />
              <br />
              <button type="submit" style={{ ...submitButtonStyle }}>Submit</button>
            </form>
            <p>A member of our team will contact you soon.</p>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default PropertyDetails;
