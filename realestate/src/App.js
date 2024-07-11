// src/App.js
import React, { useRef } from 'react';
import './App.css';
import Header from './Pages/Header';
import Body from './Pages/Body';
import RecommendedProperties from './Pages/properties';
import CardSlider from './Pages/CardSlider';
import CardComponent from './Pages/Services';
import Counter from './Pages/Counter'
import Review from './Pages/Review';
import Footer from './Pages/Footer';
import Benefits from './Pages/benefits';



function App() {
  const contactUsRef = useRef(null);

  const scrollToContactUs = () => {
    contactUsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <Header scrollToContactUs={scrollToContactUs} />
      <Body />
      <main>
        <RecommendedProperties/>
        <CardSlider/>
        <CardComponent/>
        <Counter/>
        <Review/>
        <p>Scroll down to hide the header. Scroll up to show it.</p>
        {/* Add more content here to make the page scrollable */}
        <Benefits/>
      </main>
      
       <div ref={contactUsRef} style={{ padding: '50px', backgroundImage: 'url(https://homezennextjs.vercel.app/_next/static/media/banner-footer.4057eb3d.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>

         <Footer/>
        
        </div>
        {/* <Team/> */}
    </div>
  );
}

export default App;
