import React, { useState } from 'react';
import '../components/RealEstateItem.css'; // Assuming you will create this CSS file

const RealEstateItem = ({ image, address, price }) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div className="real-estate-item" style={{ position: 'relative' }}>
      {true?<div
        style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          backgroundColor: '#f8d401',
          color: '#fff',
          padding: '5px 10px',
          fontWeight: 'bold',
          borderRadius: '5px',
        }}
      >
        FEATURED
      </div>:<></>}
      <img src={image} alt="Property" className="property-image" />
      <button className="heart-button" onClick={toggleFavorite}>
        {isFavorited ? '❤️' : '🤍'}
      </button>
      <div className="property-details">
        <p className="property-address">{address}</p>
        <p className="property-price">{price}</p>
      </div>
    </div>
  );
};

export default RealEstateItem;
