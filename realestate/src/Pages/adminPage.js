import React, { useState, useEffect } from 'react';
import PropertyListItem from './PropertyListItem';
import '../components/AdminPage.css';


const initialProperties = [
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
];

const AdminPage = () => {
  const [properties, setProperties] = useState(initialProperties);
  const [showWelcome, setShowWelcome] = useState(true);



  const handleDelete = (id) => {
    setProperties(properties.filter((property) => property.id !== id));
  };

  const handleEdit = (updatedProperty) => {
    setProperties(properties.map((property) =>
      property.id === updatedProperty.id ? updatedProperty : property
    ));
  };

  return (
    <div className="admin-container">
     <h1 className="welcome-text">Welcome Admin</h1>
      <div className="properties-container">
        <h2>Property List</h2>
        <div className="properties-list">
          {properties.map((property) => (
            <PropertyListItem
              key={property.id}
              property={property}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
