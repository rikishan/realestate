import React from 'react';
import '../components/Benefits.css';

const benefits = [
  {
   
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThXofy44WQNpvsImufKcqB0h1HSt7Qbtckjg&usqp=CAU', // Replace with actual paths to your icons
    title: 'Proven Expertise',
    description: 'Our seasoned team excels in real estate with years of successful market navigation, offering informed decisions and optimal results.',
  },
  {
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6fIrv2Az29i5OitsOtY-mLFIHaxsC3jZM8mABUraBJ_ngPZtMvDAy8vi4YLP2P4Jl7xQ&usqp=CAU',
    title: 'Customized Solutions',
    description: 'We pride ourselves on crafting personalized strategies to match your unique goals, ensuring a seamless real estate journey.',
  },
  {
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQd2o6YaPTG9cC88-rByQjIirKbZ_MhWmDWw&usqp=CAU',
    title: 'Transparent Partnerships',
    description: 'Transparency is key in our client relationships. We prioritize clear communication and ethical practices, fostering trust and reliability throughout.',
  },
];

const Benefits = () => {
  return (
    <div className="benefits-container">
      <h3 style={{ color: '#ff0000' ,fontFamily:'Josefin San'}}>Our Benefit</h3>
      <h2 style={{fontWeight:'sans-serif'}}>Why Choose Homeya</h2>
      <div className="benefits-grid">
        {benefits.map((benefit, index) => (
          <div key={index} className="benefit-item">
            <img src={benefit.icon} alt={benefit.title} className="benefit-icon" />
            <h4>{benefit.title}</h4>
            <p>{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
