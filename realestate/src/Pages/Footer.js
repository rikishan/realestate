// src/Pages/Footer.js
import React from 'react';
import '../components/Footer.css'; // Create this CSS file to style your footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div style={{padding:10}}>
          <h1 className="logo-text"><span>Homzen</span></h1>
          <p>
            Specializes in providing high-class tours for those in need.
          </p>
          <p>Contact Us</p>
          <div className="contact">
            <p><i className="fas fa-map-marker-alt"></i> 101 E 129th St, East Chicago, IN 46312, US</p>
            <p><i className="fas fa-phone"></i> 1-333-345-6868</p>
            <p><i className="fas fa-envelope"></i> themesflat@gmail.com</p>
          </div>
        </div>

        <div className="footer-section links">
          <h2>Categories</h2>
          <br />
         <h5 style={{color:'white'}}>Pricing Plans</h5>
         
         <h5 style={{color:'white'}}>Our Services</h5>
         
         <h5 style={{color:'white'}}>About Us</h5>
       
       
           
          
        </div>

        <div className="footer-section links">
          <h2>Our Company</h2>
          <br />
          
          <h5 style={{color:'white'}}>Pricing Plans</h5>
         
         <h5 style={{color:'white'}}>Our Services</h5>
         
         <h5 style={{color:'white'}}>About Us</h5>
       
        
        </div>

        <div className="footer-section social">
          <h2>Newsletter</h2>
          <br />
          <p>Your Weekly/Monthly Dose of Knowledge and Inspiration</p>
          <form action="#">
            <input type="email" name="email" className="text-input contact-input" placeholder="Your email address..." />
            <button type="submit" className="btn"><i className="fas fa-arrow-right"></i></button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>©2024 Homzen. All Rights Reserved.</p>
        <p><a href="#">Terms Of Services</a> | <a href="#">Privacy Policy</a> | <a href="#">Cookie Policy</a></p>
      </div>
      <a href="#" className="to-top"><i className="fas fa-chevron-up"></i></a>
    </footer>
  );
};

export default Footer;

