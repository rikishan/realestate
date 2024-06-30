import React, { useState } from 'react';

const CardComponent = () => {
  const [isSpinning, setIsSpinning] = useState(false);

  const handleMouseEnter = () => {
    setIsSpinning(true);
  };

  const handleMouseLeave = () => {
    setIsSpinning(false);
  };

  const cardsData = [
    {
      id: 1,
      imageUrl: 'https://cdn3.iconfinder.com/data/icons/real-estate-property/33/rent_house_2-512.png',
      boldText: 'Card 1 Title',
      description: 'Description for Card 1.',
    },
    {
      id: 2,
      imageUrl: 'path-to-image-2.jpg',
      boldText: 'Card 2 Title',
      description: 'Description for Card 2.',
    },
    {
      id: 3,
      imageUrl: 'path-to-image-3.jpg',
      boldText: 'Card 3 Title',
      description: 'Description for Card 3.',
    },
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
      {cardsData.map((card) => (
        <div
          key={card.id}
          style={{
            width: '250px',
            padding: '20px',
            border: '1px solid #ccc',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            transition: 'box-shadow 0.3s ease',
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            style={{
              position: 'relative',
              overflow: 'hidden',
              width: '100%',
              height: '200px', // Adjust height as per your design
              ...(isSpinning && {
                animation: 'spin 1s ease-in-out 3',
              }),
            }}
          >
            <img
              src={card.imageUrl}
              alt="Image"
              style={{
                width: '100%',
                height: 'auto',
                transition: 'transform 0.3s ease',
              }}
            />
          </div>
          <div style={{ paddingTop: '10px' }}>
            <h2>{card.boldText}</h2>
            <p>{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardComponent;
