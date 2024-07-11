import React, { useState, useEffect } from 'react';
import RealEstateItem from './RealEstateItem';
import { setData } from '../Utils';
import { useNavigate } from 'react-router-dom';

const RecommendedLands = () => {
  const [activeButton, setActiveButton] = useState('View All');
  const [showAll, setShowAll] = useState(false); // State to toggle between showing all and a subset
  const [properties, setProperties] = useState([]);
  const navigate = useNavigate();
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

  useEffect(() => {
    fetch('http://localhost:3000/properties')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched data:', data.properties); // Add this line
        const siteProperties = data.properties.filter(property => property.propertyType === 'land');
        setProperties(siteProperties);
      })
      .catch(error => console.error('There was a problem with the fetch operation:', error));
  }, []);

 
  return (
    <div style={containerStyle}>
      <div style={featuredTextStyle}>Featured Lands</div>
      <div style={recommendedTextStyle}>Recommended For You</div>
      <div style={buttonContainerStyle}></div>
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: 20, boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', }}>
        {Array.isArray(properties) && properties.map((property, index) => (
          <RealEstateItem
          clicked={()=>{
            setData(property)
            navigate('/properties');
          }}
            key={index}
            site={false}
            image={property.images[0]}
            address={property.address}
            price={property.price}
          />
        ))}
      </div>
    </div>
  );
};

export default RecommendedLands;
