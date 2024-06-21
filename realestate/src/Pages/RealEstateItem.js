import React, { useState } from 'react';
import '../components/RealEstateItem.css'; // Assuming you will create this CSS file

const RealEstateItem = ({ image, address, price }) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div className="real-estate-item">
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
