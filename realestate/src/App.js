// src/App.js
import React from 'react';

import './App.css';
import Header from './Pages/Header';
import Body from './Pages/Body';

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <main>

        <p>Scroll down to hide the header. Scroll up to show it.</p>
        {/* Add more content here to make the page scrollable */}
        <div style={{ height: '200vh', background: '#f0f0f0' }}></div>
      </main>
    </div>
  );
}

export default App;
