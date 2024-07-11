import React, { useState } from 'react';
import { Upload, Button, Input, Select, Form, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';

const { Option } = Select;

const Sale = () => {
  const [formData, setFormData] = useState({
    address: '',
    houseName: '',
    rooms: 0,
    bathrooms: 0,
    squareFeet: 0,
    price: '',
    customerImage: '',
    images: [],
    landKunte: '',
    propertyType: '',
    buildingType: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectChange = (value, name) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageUpload = ({ fileList }) => {
    const urls = fileList.map(file => URL.createObjectURL(file.originFileObj));
    setFormData({
      ...formData,
      images: urls,
    });
  };

  const handleSave = async () => {
    try {
      const response = await axios.post('http://localhost:3000/properties', formData); 
      if (response.status === 200) {
        message.success('Property details saved successfully!');
      } else {
        message.error('Failed to save property details.');
      }
    } catch (error) {
      console.error('Error saving property details:', error);
      message.error('Failed to save property details.');
    }
  };

  return (
    <div style={{ backgroundImage: 'url(https://homezennextjs.vercel.app/images/banner/banner-property-12.jpg)'}}>
        <h1 style={{paddingTop:50}}></h1>
    <div style={{
      padding: '20px',
      maxWidth: '600px',
      margin: '0 auto',
     
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      backdropFilter: 'blur(5px)',
      color: 'white'
    }}>
      <Form className="edit-form" layout="vertical">
        <Form.Item label="Address">
          <Input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            placeholder="Address"
            className="edit-input"
          />
        </Form.Item>
        <Form.Item label="House Name">
          <Input
            type="text"
            name="houseName"
            value={formData.houseName}
            onChange={handleInputChange}
            placeholder="House Name"
            className="edit-input"
          />
        </Form.Item>
        <Form.Item label="Rooms">
          <Input
            type="number"
            name="rooms"
            value={formData.rooms}
            onChange={handleInputChange}
            placeholder="Rooms"
            className="edit-input"
          />
        </Form.Item>
        <Form.Item label="Bathrooms">
          <Input
            type="number"
            name="bathrooms"
            value={formData.bathrooms}
            onChange={handleInputChange}
            placeholder="Bathrooms"
            className="edit-input"
          />
        </Form.Item>
        <Form.Item label="Square Feet">
          <Input
            type="number"
            name="squareFeet"
            value={formData.squareFeet}
            onChange={handleInputChange}
            placeholder="Square Feet"
            className="edit-input"
          />
        </Form.Item>
        <Form.Item label="Price">
          <Input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            placeholder="Price"
            className="edit-input"
          />
        </Form.Item>
        <Form.Item label="Customer Image URL">
          <Input
            type="text"
            name="customerImage"
            value={formData.customerImage}
            onChange={handleInputChange}
            placeholder="Customer Image URL"
            className="edit-input"
          />
        </Form.Item>
        <Form.Item label="Image URLs (comma separated)">
          <Upload
            listType="picture"
            multiple
            beforeUpload={() => false} // Prevent automatic upload
            onChange={handleImageUpload}
          >
            <Button icon={<UploadOutlined />}>Upload Images</Button>
          </Upload>
        </Form.Item>
        <Form.Item label="Land Kunte">
          <Input
            type="text"
            name="landKunte"
            value={formData.landKunte}
            onChange={handleInputChange}
            placeholder="Land Kunte"
            className="edit-input"
          />
        </Form.Item>
        <Form.Item label="Property Type">
          <Select
            name="propertyType"
            value={formData.propertyType}
            onChange={(value) => handleSelectChange(value, 'propertyType')}
           
          >
            <Option value="">Select Property Type</Option>
            <Option value="site">Site</Option>
            <Option value="building">Building</Option>
            <Option value="land">Land</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Building Type">
          <Select
            name="buildingType"
            value={formData.buildingType}
            onChange={(value) => handleSelectChange(value, 'buildingType')}
           
          >
            <Option value="">Select Building Type</Option>
            <Option value="villa">Villa</Option>
            <Option value="office">Office</Option>
            <Option value="apartment">Apartment</Option>
            <Option value="studio">Studio</Option>
            <Option value="house">House</Option>
          </Select>
        </Form.Item>
        <Button type="primary" onClick={handleSave} className="save-button">Save</Button>
      </Form>
    </div>
    </div>
  );
};

export default Sale;
