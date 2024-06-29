import React, { useState } from 'react';
import '../components/RealEstateItem.css'; // Assuming you will create this CSS file

const RealEstateItem = ({ image, address, price, bedrooms, bathrooms, area, agent }) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div className="real-estate-item" style={{ position: 'relative', border: '1px solid #ccc', borderRadius: '10px', marginBottom: '20px' }}>
      <div
        style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          display: 'flex',
          gap: '10px'
        }}
      >
        <div style={{
          backgroundColor: '#f8d401',
          color: '#fff',
          padding: '5px 10px',
          fontWeight: 'bold',
          borderRadius: '5px',
        }}>FEATURED</div>
        <div style={{
          backgroundColor: 'grey',
          color: '#fff',
          display: 'flex',
          padding: '10px',
          fontWeight: 'bold',
          fontSize: '8px',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50px',
        }}>SALE</div>
      </div>

      <img src={image} alt="Property" className="property-image" style={{ width: '100%', borderRadius: '10px' }} />
      <button className="heart-button" onClick={toggleFavorite} style={{
        position: 'absolute',
        top: '10px',
        right: '10px',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontSize: '20px'
      }}>
        {isFavorited ? '❤️' : '🤍'}
      </button>

      <div style={{ padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <h2 style={{ margin: '10px 0', fontSize: 15 }}>Casa Lomas De Machalí Machas</h2>
        <p style={{ color: '#666', fontSize: 14, }}>{address}</p>
        <div className="property-info" style={{ display: 'flex', gap: '20px', margin: '10px 0' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span role="img" aria-label="bed">🛏️</span>
            {bedrooms}
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span role="img" aria-label="bath">🛁</span>
            {bathrooms}
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span role="img" aria-label="area">📐</span>
            {area} SqFT
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
            <img src="/path/to/agent-image.png" alt="Agent" style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'red' }} />
            <span style={{ marginLeft: '10px' }}>kishan</span>
          </div>
          <p style={{ fontSize: '14px', fontWeight: 'bold', margin: '0' }}>${price}/SqFT</p>
        </div>
      
      </div>
    </div>
  );
};

export default RealEstateItem;
