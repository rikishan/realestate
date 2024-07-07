import React, { useState } from 'react';
import RealEstateItem from './RealEstateItem';
import { Link } from 'react-router-dom';

const properties = [
  {
    image: 'https://homezennextjs.vercel.app/images/blog/blog-3.jpg',
    address: '123 Main St, Anytown, USA',
    price: '$250,000',
  },
  {
    image: 'https://homezennextjs.vercel.app/images/blog/blog-3.jpg',
    address: '456 Oak St, Sometown, USA',
    price: '$350,000',
  },
  {
    image: 'https://homezennextjs.vercel.app/images/blog/blog-3.jpg',
    address: '456 Oak St, Sometown, USA',
    price: '$350,000',
  },
  {
    image: 'https://homezennextjs.vercel.app/images/blog/blog-3.jpg',
    address: '456 Oak St, Sometown, USA',
    price: '$350,000',
  },
  {
    image: 'https://homezennextjs.vercel.app/images/blog/blog-3.jpg',
    address: '456 Oak St, Sometown, USA',
    price: '$350,000',
  },
  {
    image: 'https://homezennextjs.vercel.app/images/blog/blog-3.jpg',
    address: '456 Oak St, Sometown, USA',
    price: '$350,000',
  },
  {
    image: 'https://homezennextjs.vercel.app/images/blog/blog-3.jpg',
    address: '123 Main St, Anytown, USA',
    price: '$250,000',
  },
  {
    image: 'https://homezennextjs.vercel.app/images/blog/blog-3.jpg',
    address: '456 Oak St, Sometown, USA',
    price: '$350,000',
  },
  {
    image: 'https://homezennextjs.vercel.app/images/blog/blog-3.jpg',
    address: '456 Oak St, Sometown, USA',
    price: '$350,000',
  },
  {
    image: 'https://homezennextjs.vercel.app/images/blog/blog-3.jpg',
    address: '456 Oak St, Sometown, USA',
    price: '$350,000',
  },
  {
    image: 'https://homezennextjs.vercel.app/images/blog/blog-3.jpg',
    address: '456 Oak St, Sometown, USA',
    price: '$350,000',
  },
  {
    image: 'https://homezennextjs.vercel.app/images/blog/blog-3.jpg',
    address: '456 Oak St, Sometown, USA',
    price: '$350,000',
  },
];

const RecommendedProperties = () => {
  const [activeButton, setActiveButton] = useState('View All');
  const [showAll, setShowAll] = useState(false); // State to toggle between showing all and a subset

  const containerStyle = {
    textAlign: 'center',
    margin: '20px 0',
  };

  const featuredTextStyle = {
    color: '#ff0000', // Adjust the color as needed
    fontSize: '14px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    margin: '10px 0',
  };

  const recommendedTextStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '10px 0',
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    margin: '20px 0',
  };

  const buttonStyle = (button) => ({
    backgroundColor: activeButton === button ? '#ff0000' : '#f5f5f5',
    color: activeButton === button ? '#fff' : '#000',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    margin: '0 10px',
    transition: 'background-color 0.3s, color 0.3s',
  });

  const handleButtonClick = (button) => {
    setActiveButton(button);
    setShowAll(false); // Reset to show subset when button is clicked
  };

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  // Determine how many items to display based on showAll state
  const visibleProperties = showAll ? properties : properties.slice(0, 10);

  return (
    <div style={containerStyle}>
      <div style={featuredTextStyle}>Featured Properties</div>
      <div style={recommendedTextStyle}>Recommended For You</div>
      <div style={buttonContainerStyle}>
        <button
          style={buttonStyle('View All')}
          onClick={() => {
            handleButtonClick('View All');
            toggleShowAll(); // Toggle showAll state when 'View All' button is clicked
          }}
        >
          View All
        </button>
        <button
          style={buttonStyle('Apartment')}
          onClick={() => handleButtonClick('Apartment')}
        >
          Apartment
        </button>
        <button
          style={buttonStyle('Villa')}
          onClick={() => handleButtonClick('Villa')}
        >
          Villa
        </button>
        <button
          style={buttonStyle('Studio')}
          onClick={() => handleButtonClick('Studio')}
        >
          Studio
        </button>
        <button
          style={buttonStyle('House')}
          onClick={() => handleButtonClick('House')}
        >
          House
        </button>
        <button
          style={buttonStyle('Office')}
          onClick={() => handleButtonClick('Office')}
        >
          Office
        </button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: 20, boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', }}>
        {visibleProperties.map((property, index) => (
          <Link style={{ textDecoration: 'none' }} to='/detailedPropties'><RealEstateItem
            key={index}
           
            image={property.image}
            address={property.address}
            price={property.price}
          /></Link>
        ))}
      </div>
      {!showAll && properties.length > 10 && (
        <button className="view-more-button" onClick={toggleShowAll}>
          View More
        </button>
      )}
    </div>
  );
};

export default RecommendedProperties;
