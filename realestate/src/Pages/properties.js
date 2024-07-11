import React, { useEffect, useState } from 'react';
import RealEstateItem from './RealEstateItem';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { setData } from '../Utils';

const RecommendedProperties = () => {
  const [activeButton, setActiveButton] = useState('View All');
  const [showAll, setShowAll] = useState(false); // State to toggle between showing all and a subset
  const [filterButtonData, setfilterButtonData] = useState([])
  const [properties, setProperties] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("0000000000000",filterButtonData);
  }, [])
  
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
      const siteProperties = data.properties.filter(property => property.propertyType === 'building');
      console.log("3456789",siteProperties);
      setProperties(siteProperties);
      setfilterButtonData(siteProperties)
    })

    .catch(error => console.error('There was a problem with the fetch operation:', error));
}, []);






useEffect(() => {
  const delayFilter = setTimeout(() => {
    
  }, 3000);

  return () => clearTimeout(delayFilter);
}, [activeButton]);

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
    setShowAll(false); 

    console.log(button);

    if(button.toLowerCase()=='view all'){
      setfilterButtonData(properties)
    }else{
      const filterData = properties?.filter(
        (property) => property.buildingType.toLowerCase() == button.toLowerCase()
      );
      setfilterButtonData(filterData)
      console.log("1234567890",filterData);
    }
    
  };

  const toggleShowAll = () => {
   
    const regex = /properties/;

    if (regex.test(window.location.href)) {
        console.log("The URL contains 'properties'.");
        setShowAll(!showAll);
    } else {
      navigate('/properties');
      
    }
   
  };
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
        <RealEstateItem
        key={index}
        clicked={()=>{
          setData(property)
          navigate('/detailedPropties');
        }}
        image={property.images[0]}
        address={property.address}
        price={property.price}
      />
        ))}
      </div>
      {!showAll && properties.length > 10 && (
        <button className="view-more-button" 
        onClick={toggleShowAll}
        >

          View all
        </button>
      )}
    </div>
  );
};

export default RecommendedProperties;
