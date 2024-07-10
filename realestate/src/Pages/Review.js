import React, { useState } from 'react';

const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      imageUrl: 'https://media.istockphoto.com/id/462772867/photo/inner-city-decay.jpg?s=612x612&w=0&k=20&c=qG0wAgSnOF05I1kR42KvFOKvoK3ypbGbg-uTEvIXivU=', // Replace with actual image path or URL
      customerName: 'John Doe',
      feedback: 'This app helped me find my dream home effortlessly. Highly recommended!',
    },
    {
      id: 2,
      imageUrl: 'path-to-image-2.jpg', // Replace with actual image path or URL
      customerName: 'Jane Smith',
      feedback: 'A fantastic service with great customer support. Made my house hunting so much easier!',
    },
    {
      id: 3,
      imageUrl: 'path-to-image-3.jpg', // Replace with actual image path or URL
      customerName: 'Robert Brown',
      feedback: 'Highly efficient and user-friendly. I found the perfect apartment in no time.',
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  return (
    <div style={{
      backgroundColor: '#f7f7f7', // Replace with the actual image path
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '10px',
      minHeight: '60vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
      }}>
        <div style={{
          flex: 1,
          
          padding: '20px',
        }}>
          <h1>What Our Users Say</h1>
          <p>Discover what our users are saying about our real estate app. Their experiences and feedback help us improve and provide the best service possible.</p>
       
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            <button 
             onMouseOver={(e) => { e.target.style.color = 'white'; e.target.style.backgroundColor = 'red'; }}
             onMouseOut={(e) => { e.target.style.color = 'red'; e.target.style.backgroundColor = 'white'; }}
            
            onClick={handlePrev} style={{
              backgroundColor: '#fff',
              border: '1px solid #ccc',
              borderRadius: '5%',
              padding: '20px',
              cursor: 'pointer',
              transition: '0.3s',
              marginRight: '10px',
            }}>
              &#8592;
            </button>
            <button
             onMouseOver={(e) => { e.target.style.color = 'white'; e.target.style.backgroundColor = 'red'; }}
             onMouseOut={(e) => { e.target.style.color = 'red'; e.target.style.backgroundColor = 'white'; }}
            onClick={handleNext} style={{
          backgroundColor: '#fff',
          border: '1px solid #ccc',
          borderRadius: '5%',
          padding: '20px',
          cursor: 'pointer',
          transition: '0.3s',
          marginRight: '10px',
            }}>
              &#8594;
            </button>
          </div>
        </div>

        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          
          <div style={{
            width: '250px',
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '10px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#fff',
            textAlign: 'center',
            marginBottom: '20px',
          }}>
            <img
              src={reviews[currentIndex].imageUrl}
              alt="Customer"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '10%',
                marginBottom: '10px',
              }}
            />
            <h2>{reviews[currentIndex].customerName}</h2>
            <p>{reviews[currentIndex].feedback}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
