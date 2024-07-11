// src/components/CardSlider.js
import React, { useEffect, useRef } from 'react';

const sliderContainerStyle = {
    overflow: 'hidden',
    
    position: 'relative',
};

const sliderStyle = {
    display: 'flex',
    transition: 'transform 1s ease-in-out',
};

const containerStyle = {
    textAlign: 'center',
    margin: '20px 0',
    backgroundColor: 'beige',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
};

const featuredTextStyle = {
    color: '#ff0000', // Adjust the color as needed
    fontSize: '14px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    marginBottom: 30,
};

const recommendedTextStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: 30,
};

const images = [
    'https://homezennextjs.vercel.app/images/location/location-1.jpg',
    'https://homezennextjs.vercel.app/images/location/location-2.jpg',
    'https://homezennextjs.vercel.app/images/location/location-3.jpg',
    'https://homezennextjs.vercel.app/images/location/location-1.jpg',
    'https://homezennextjs.vercel.app/images/location/location-2.jpg',
    'https://homezennextjs.vercel.app/images/location/location-3.jpg',
    'https://homezennextjs.vercel.app/images/location/location-3.jpg',
    'https://homezennextjs.vercel.app/images/location/location-1.jpg',
    'https://homezennextjs.vercel.app/images/location/location-2.jpg',
    'https://homezennextjs.vercel.app/images/location/location-3.jpg',
    'https://homezennextjs.vercel.app/images/location/location-1.jpg',
    'https://homezennextjs.vercel.app/images/location/location-2.jpg',
    'https://homezennextjs.vercel.app/images/location/location-3.jpg',
    'https://homezennextjs.vercel.app/images/location/location-1.jpg',
    'https://homezennextjs.vercel.app/images/location/location-2.jpg',
    'https://homezennextjs.vercel.app/images/location/location-3.jpg',
    'https://homezennextjs.vercel.app/images/location/location-3.jpg',
    'https://homezennextjs.vercel.app/images/location/location-1.jpg',
    'https://homezennextjs.vercel.app/images/location/location-2.jpg',
    'https://homezennextjs.vercel.app/images/location/location-3.jpg',
    // add more images as needed
];

const addresses = [
    '123 Main St, Springfield',
    '456 Elm St, Metropolis',
    '789 Oak St, Gotham',
    '123 Main St, Springfield',
    '456 Elm St, Metropolis',
    '789 Oak St, Gotham',
    '789 Oak St, Gotham',
    '123 Main St, Springfield',
    '456 Elm St, Metropolis',
    '789 Oak St, Gotham',
    '456 Elm St, Metropolis',
    '789 Oak St, Gotham',
    '123 Main St, Springfield',
    '456 Elm St, Metropolis',
    '789 Oak St, Gotham',
    '789 Oak St, Gotham',
    '123 Main St, Springfield',
    '456 Elm St, Metropolis',
    '789 Oak St, Gotham',
    // add more addresses as needed
];

const CardSlider = () => {
    const sliderRef = useRef(null);
    let index = 0;

    useEffect(() => {
        const interval = setInterval(() => {
            index = (index + 1) % 6; // Only move six cards
            sliderRef.current.style.transform = `translateX(-${index * 220}px)`; // 220px is the width of each card including margin
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div style={containerStyle}>
            <div style={{ ...featuredTextStyle, alignSelf: 'center' }}>Featured Properties</div>
            <div style={recommendedTextStyle}>Recommended For You</div>
            <div style={sliderContainerStyle}>
                <div style={sliderStyle} ref={sliderRef}>
                    {images.map((image, idx) => (
                        <div style={{ width: '200px', height: '330px', margin: '0 10px' }} key={idx}>
                            <div style={{ width: '100%', height: '300px' }}>
                                <img
                                    src={image}
                                    alt={`Slide ${idx}`}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        borderRadius: '10px',
                                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                    }}
                                />
                                <div style={{ textAlign: 'center', marginTop: '10px' }}>
                                    {addresses[idx]}
                                </div>
                            </div>


                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CardSlider;
