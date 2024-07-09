import React, { useState } from 'react';
import PropertyListItem from './PropertyListItem';
import '../components/AdminPage.css';
import { Modal } from 'antd';

const AdminPage = () => {
  const [properties, setProperties] = useState([
    {
      id: 1,
      address: '123 Main St, City',
      houseName: 'Beautiful Villa',
      rooms: 4,
      bathrooms: 3,
      squareFeet: 2500,
      price: '$750,000',
      customerImage: 'https://example.com/customer-image.jpg',
      images: [
        'https://example.com/image1.jpg',
        'https://example.com/image2.jpg',
        'https://example.com/image3.jpg'
      ],
      landKunte: '30x40',
      propertyType: 'building',
      buildingType: 'villa'
    },
    {
      id: 2,
      address: '456 Elm St, City',
      houseName: 'Modern Apartment',
      rooms: 3,
      bathrooms: 2,
      squareFeet: 1500,
      price: '$550,000',
      customerImage: 'https://example.com/customer-image.jpg',
      images: [
        'https://example.com/image4.jpg',
        'https://example.com/image5.jpg',
        'https://example.com/image6.jpg'
      ],
      landKunte: '25x30',
      propertyType: 'building',
      buildingType: 'apartment'
    }
  ]);

  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    address: '',
    houseName: '',
    rooms: 0,
    bathrooms: 0,
    squareFeet: 0,
    price: '',
    customerImage: '',
    images: [],
    landKunte: '',
    propertyType: '',
    buildingType: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor:true ? '#dc3545' : '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    height: '50px',
    transition: 'background-color 0.3s ease',
  };


  const handleSave = () => {
    // Validate form data before saving
    if (formData.address && formData.houseName && formData.rooms > 0 && formData.bathrooms > 0
        && formData.squareFeet > 0 && formData.price && formData.customerImage && formData.landKunte
        && formData.propertyType && formData.buildingType) {
      // Create a new property object
      const newProperty = {
        address: formData.address,
        houseName: formData.houseName,
        rooms: parseInt(formData.rooms),
        bathrooms: parseInt(formData.bathrooms),
        squareFeet: parseInt(formData.squareFeet),
        price: formData.price,
        customerImage: formData.customerImage,
        images: formData.images.split(',').map(url => url.trim()), // Split URLs by comma and trim whitespace
        landKunte: formData.landKunte,
        propertyType: formData.propertyType,
        buildingType: formData.buildingType
      };

      // Update properties state with new property
      setProperties([...properties, newProperty]);

      // Clear form data and close modal
      setFormData({
        address: '',
        houseName: '',
        rooms: 0,
        bathrooms: 0,
        squareFeet: 0,
        price: '',
        customerImage: '',
        images: [],
        landKunte: '',
        propertyType: '',
        buildingType: ''
      });
      setOpen(false); // Close modal after saving
    } else {
      alert('Please fill in all fields before saving.');
    }
    console.log(formData);
  };

  return (
    <div className="admin-container">
      <h1 className="welcome-text">Welcome Admin</h1>
      <div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <h2>Property List</h2>
          <button
            onClick={() => setOpen(true)}
            style={buttonStyle}
          >
            Add new item
          </button>
        </div>
        <div className="properties-list">
          {properties.map((property) => (
            <PropertyListItem
              key={property.id}
              property={property}
              onDelete={(id) => setProperties(properties.filter((prop) => prop.id !== id))}
              onEdit={(updatedProperty) => setProperties(properties.map((prop) => (prop.id === updatedProperty.id ? updatedProperty : prop)))}
            />
          ))}
        </div>
      </div>
      <Modal
        visible={open}
        onCancel={() => setOpen(false)}
        footer={null}
      >
        <div className="edit-form">
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            placeholder="Address"
            className="edit-input"
          />
          <input
            type="text"
            name="houseName"
            value={formData.houseName}
            onChange={handleInputChange}
            placeholder="House Name"
            className="edit-input"
          />
          <input
            type="number"
            name="rooms"
            value={formData.rooms}
            onChange={handleInputChange}
            placeholder="Rooms"
            className="edit-input"
          />
          <input
            type="number"
            name="bathrooms"
            value={formData.bathrooms}
            onChange={handleInputChange}
            placeholder="Bathrooms"
            className="edit-input"
          />
          <input
            type="number"
            name="squareFeet"
            value={formData.squareFeet}
            onChange={handleInputChange}
            placeholder="Square Feet"
            className="edit-input"
          />
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            placeholder="Price"
            className="edit-input"
          />
          <input
            type="text"
            name="customerImage"
            value={formData.customerImage}
            onChange={handleInputChange}
            placeholder="Customer Image URL"
            className="edit-input"
          />
          <input
            type="text"
            name="images"
            value={formData.images}
            onChange={handleInputChange}
            placeholder="Image URLs (comma separated)"
            className="edit-input"
          />
          <input
            type="text"
            name="landKunte"
            value={formData.landKunte}
            onChange={handleInputChange}
            placeholder="Land Kunte"
            className="edit-input"
          />
          <select
            name="propertyType"
            value={formData.propertyType}
            onChange={handleInputChange}
            className="edit-input"
          >
            <option value="">Select Property Type</option>
            <option value="site">Site</option>
            <option value="building">Building</option>
            <option value="land">Land</option>
          </select>
          <select
            name="buildingType"
            value={formData.buildingType}
            onChange={handleInputChange}
            className="edit-input"
          >
            <option value="">Select Building Type</option>
            <option value="villa">Villa</option>
            <option value="office">Office</option>
            <option value="apartment">Apartment</option>
            <option value="studio">Studio</option>
            <option value="house">House</option>
          </select>
          <button onClick={handleSave} className="save-button">Save</button>
        </div>
      </Modal>
    </div>
  );
};

export default AdminPage;
