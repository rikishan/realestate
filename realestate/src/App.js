// src/App.js
import React from 'react';

import './App.css';
import Header from './Pages/Header';
import Body from './Pages/Body';
import RealEstateItem from './Pages/RealEstateItem';

const properties = [
  {
    image: 'https://via.placeholder.com/300',
    address: '123 Main St, Anytown, USA',
    price: '$250,000',
  },
  {
    image: 'https://via.placeholder.com/300',
    address: '456 Oak St, Sometown, USA',
    price: '$350,000',
  },
  // Add more properties as needed
];

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <main>
        <div className="properties-row">
          {properties.map((property, index) => (
            <RealEstateItem
              key={index}
              image={property.image}
              address={property.address}
              price={property.price}
            />
          ))}
        </div>
        <p>Scroll down to hide the header. Scroll up to show it.</p>
        {/* Add more content here to make the page scrollable */}
        <div style={{ height: '200vh', background: '#f0f0f0' }}></div>
      </main>
    </div>
  );
}

export default App;
