import React, { useState } from 'react';
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';


const profileImages = [
  'https://homezennextjs.vercel.app/images/avatar/avt-1.jpg',
  'https://homezennextjs.vercel.app/images/avatar/avt-2.jpg',
  'https://homezennextjs.vercel.app/images/avatar/avt-3.jpg',
  'https://homezennextjs.vercel.app/images/avatar/avt-4.jpg',
  'https://homezennextjs.vercel.app/images/avatar/avt-5.jpg',
  'https://homezennextjs.vercel.app/images/avatar/avt-6.jpg',
  'https://homezennextjs.vercel.app/images/avatar/avt-7.jpg',
  'https://homezennextjs.vercel.app/images/avatar/avt-8.jpg',
  'https://homezennextjs.vercel.app/images/avatar/avt-9.jpg',
  'https://homezennextjs.vercel.app/images/avatar/avt-10.jpg',
  'https://homezennextjs.vercel.app/images/avatar/avt-11.jpg',
  'https://homezennextjs.vercel.app/images/avatar/avt-12.jpg'
];

const RealEstateItem = ({ image, address, price, bedrooms, bathrooms, area, agent, clicked }) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = (event) => {
    event.stopPropagation();
    setIsFavorited(!isFavorited);
  };

  const randomProfileImage = profileImages[Math.floor(Math.random() * profileImages.length)];


  return (
    <div
      onClick={clicked}
      className="real-estate-item"
      style={{
        position: 'relative',
        border: '1px solid #ccc',
        borderRadius: '10px',
        marginBottom: '20px',
        overflow: 'hidden',
        width: '300px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.05)';
        e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
      }}
    >
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
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#f8d401',
          color: '#fff',
          padding: '1px 10px',
          fontWeight: 'bold',
          borderRadius: '5px',
          fontSize: '10px'
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
      <Link style={{ textDecoration: 'none' }} to='/detailedPropties'>
      <img src={image} alt="Property" style={{ width: '100%', borderRadius: '10px', transition: 'all 0.3s ease' }} /></Link>
      <button
        className="heart-button"
        onClick={toggleFavorite}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontSize: '20px'
        }}
      >
        {isFavorited ? '❤️' : '🤍'}
      </button>

      <div style={{ padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <h2 style={{ margin: '10px 0', fontSize: '18px', color: 'black',fontFamily:'Hanalei Fill' }}>Casa Lomas De Machalí Machas</h2>
        <p style={{ color: '#666', fontSize: '14px' }}>{address}</p>
        <div style={{ display: 'flex', gap: '20px', margin: '10px 0' }}>
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
            {area}
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
          <img src={randomProfileImage} alt="Agent" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
            <span style={{ marginLeft: '10px',color: '#666', }}>kishan</span>
          </div>
          <p style={{ fontSize: '14px', fontWeight: 'bold', margin: '0',color: '#666', }}>${price}/SqFT</p>
        </div>
      </div>
    </div>
  );
};




export default RealEstateItem;
