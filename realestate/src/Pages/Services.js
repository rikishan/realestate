import React, { useState } from 'react';

const CardComponent = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const cardsData = [
    {
      id: 1,
      imageUrl: 'https://cdn3.iconfinder.com/data/icons/real-estate-property/33/rent_house_2-512.png', // Replace with actual image path or URL
      boldText: 'Buy A New Home',
      description: 'Discover your dream home effortlessly. Explore diverse properties and expert guidance for a seamless buying experience.',
    },
    {
      id: 2,
      imageUrl: 'path-to-image-2.jpg', // Replace with actual image path or URL
      boldText: 'Rent A Home',
      description: 'Discover your perfect rental effortlessly. Explore a diverse variety of listings tailored precisely to suit your unique lifestyle needs.',
    },
    {
      id: 3,
      imageUrl: 'path-to-image-3.jpg', // Replace with actual image path or URL
      boldText: 'Sell A Home',
      description: 'Sell confidently with expert guidance and effective strategies, showcasing your property\'s best features for a successful sale.',
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
          <a href="#" style={{ color: 'red', textDecoration: 'none' }}>
            Learn More →
          </a>
        </div>
      ))}
    </div>
  );
};

export default CardComponent;
