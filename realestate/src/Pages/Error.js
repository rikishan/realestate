import React from 'react';

const Error = ({ errorCode, errorMessage }) => {
  const errorPageStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f8d7da',  // Light red background color
    color: '#721c24',  // Dark red text color
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    padding: '20px',
  };

  const errorImageStyle = {
    marginBottom: '20px',
    maxWidth: '100px',
  };

  return (
    <div style={errorPageStyle}>
      <div>
        <img src="/images/error.png" alt="Error Icon" style={errorImageStyle} />
      </div>
      <div>
        <h2>{errorCode}</h2>
        <p>{errorMessage}</p>
        <p>Oops! Something went wrong. Please try again later.</p>
        <a href="/" style={{ color: '#721c24', textDecoration: 'none' }}>Back to Home</a>
      </div>
    </div>
  );
};

export default Error;
