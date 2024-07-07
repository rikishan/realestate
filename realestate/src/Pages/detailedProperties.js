import React, { useState, useEffect, } from 'react';

import { Button, Modal } from 'antd';
import Modals from '../Model/CollectuserContact';


  


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
  const property = {
    images: [
      'https://cdn.pixabay.com/photo/2020/01/03/05/36/house-4737447_1280.png',
      'https://www.buyrentkenya.com/discover/wp-content/uploads/2022/06/brk-blog-4reasons-why.png',
      'https://cdn.pixabay.com/photo/2020/01/03/05/36/house-4737447_1280.png'
    ],
    title: 'Beautiful Home',
    description: 'Spacious 3-bedroom house with a garden.',
    price: '$500,000'
  };

  // Function to handle next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % property.images.length);
  };

  // Function to handle previous image
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + property.images.length) % property.images.length);
  };

  // Auto advance images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % property.images.length);
    }, 3000); // Change interval time as needed (in milliseconds)

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [property.images.length]); // Dependency array to ensure useEffect runs when images change


  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // Call your method here
      showModal()
    }, 5000); // 5000 milliseconds = 5 seconds

    // Cleanup function to clear timeout
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);



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
     // Close modal after submission
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
      {showModal&&<Modal
        open={open}
        title="Title"
        onOk={handleOk}
        onCancel={handleCancel}
       
      >
        <div >
      <div style={contentStyle}>
        
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
          
           
        </form>
        <p>A member of our team will contact you soon.</p>
      </div>
    </div>
      </Modal>}
    </div>
  );
};

export default PropertyDetails;
