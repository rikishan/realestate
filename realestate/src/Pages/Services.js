import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CardComponent = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };
  const navigate = useNavigate();
  const cardsData = [
    {
      id: 1,
      imageUrl: 'https://cdn3.iconfinder.com/data/icons/real-estate-property/33/rent_house_2-512.png', // Replace with actual image path or URL
      boldText: 'Home',
      description: 'Find your perfect home with ease. Explore various options and receive expert guidance for a smooth buying experience.',
    },
    {
      id: 2,
      imageUrl: 'https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcm01MDUtNC0wMDRkXzEtbDA5YWtjMXkucG5n.png', // Replace with actual image path or URL
      boldText: 'Land',
      description: 'Discover the ideal land for your needs. Explore a wide range of plots and receive expert advice to make an informed decision.',
    },
    {
      id: 3,
      imageUrl: 'https://www.prestigelavenderfield.net.in/images/prestige/types-of-land-in-bangalore.webp', // Replace with actual image path or URL
      boldText: 'Site',
      description: 'Find the perfect site for your projects. Explore various locations and receive professional guidance for a successful purchase.',
    },
  ];
  

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '20px' }}>
      {cardsData.map((card, index) => (
        <div
          key={card.id}
          style={{
            width: '300px',
            padding: '20px',
           
            textAlign: 'center',
            transition: 'box-shadow 0.3s ease',
          }}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <div
            style={{
              position: 'relative',
              overflow: 'hidden',
              width: '100%',
              height: '100px',
              marginBottom: '20px',
            }}
          >
            <img
              src={card.imageUrl}
              alt="Icon"
              style={{
                width: '100px',
                height: '100px',
                transition: 'transform 2s ease-in-out',
                transform: hoveredCard === index ? 'rotate(1000deg)' : 'none', // 1800deg = 5 full rotations
              }}
            />
          </div>
          <h2>{card.boldText}</h2>
          <p>{card.description}</p>
          <a 
         
          onClick={()=>{
            if(index==0)navigate('/properties');
            if(index==1)navigate('/site');
            if(index==2)navigate('/land');
          }}
          style={{ color: 'red', textDecoration: 'none',cursor:'pointer' }}>
            Learn More →
          </a>
        </div>
      ))}
    </div>
  );
};

export default CardComponent;
