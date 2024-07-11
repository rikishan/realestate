import React, { useEffect, useState } from 'react';
import { Card } from 'antd'; // Assuming you are using Ant Design for cards

const DisplayStoredData = () => {
  const [storedData, setStoredData] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('contactFormData')) || [];
    setStoredData(data);
  }, []);

  return (
    <div>
      <h2>All Stored Contact Form Data</h2>
      {storedData.length > 0 ? (
        storedData.map((data) => (
          <Card key={data.id} style={{ marginBottom: '16px' }}>
            <p><strong>Full Name:</strong> {data.fullName}</p>
            <p><strong>Phone Number:</strong> {data.phoneNumber}</p>
            <p><strong>Email Address:</strong> {data.emailAddress}</p>
            <p><strong>Message:</strong> {data.message}</p>
          </Card>
        ))
      ) : (
        <p>No data found in localStorage.</p>
      )}
    </div>
  );
};

export default DisplayStoredData;
