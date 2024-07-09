import React, { useState } from 'react';
import RealEstateItem from './RealEstateItem';
import '../components/PropertyListItem.css';

const PropertyListItem = ({ property, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState(property);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onEdit(editData);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="property-list-item">
      {isEditing ? (
        <div className="edit-form">
          <input
            type="text"
            name="address"
            value={editData.address}
            onChange={handleChange}
            placeholder="Address"
            className="edit-input"
          />
          <input
            type="text"
            name="houseName"
            value={editData.houseName}
            onChange={handleChange}
            placeholder="House Name"
            className="edit-input"
          />
          <input
            type="number"
            name="rooms"
            value={editData.rooms}
            onChange={handleChange}
            placeholder="Rooms"
            className="edit-input"
          />
          <input
            type="number"
            name="bathrooms"
            value={editData.bathrooms}
            onChange={handleChange}
            placeholder="Bathrooms"
            className="edit-input"
          />
          <input
            type="number"
            name="squareFeet"
            value={editData.squareFeet}
            onChange={handleChange}
            placeholder="Square Feet"
            className="edit-input"
          />
          <input
            type="text"
            name="price"
            value={editData.price}
            onChange={handleChange}
            placeholder="Price"
            className="edit-input"
          />
          <input
            type="text"
            name="customerImage"
            value={editData.customerImage}
            onChange={handleChange}
            placeholder="Customer Image URL"
            className="edit-input"
          />
          <input
            type="text"
            name="images"
            value={editData.images.join(', ')}
            onChange={(e) => setEditData((prev) => ({
              ...prev,
              images: e.target.value.split(', ').map(url => url.trim()),
            }))}
            placeholder="Image URLs (comma separated)"
            className="edit-input"
          />
          <input
            type="text"
            name="landKunte"
            value={editData.landKunte}
            onChange={handleChange}
            placeholder="Land Kunte"
            className="edit-input"
          />
          <select
            name="propertyType"
            value={editData.propertyType}
            onChange={handleChange}
            className="edit-input"
          >
            <option value="">Select Property Type</option>
            <option value="site">Site</option>
            <option value="building">Building</option>
            <option value="land">Land</option>
          </select>
          <select
            name="buildingType"
            value={editData.buildingType}
            onChange={handleChange}
            className="edit-input"
          >
            <option value="">Select Building Type</option>
            <option value="villa">Villa</option>
            <option value="office">Office</option>
            <option value="apartment">Apartment</option>
            <option value="studio">Studio</option>
            <option value="house">House</option>
          </select>
          <button onClick={handleSave} className="save-button">Save</button>
        </div>
      ) : (
        <>
          <RealEstateItem
            image={'https://media.istockphoto.com/id/1345384816/photo/construction-industry-and-engineering-in-post-recession-period.jpg?s=612x612&w=0&k=20&c=3sK6hLkePixyVhbjrSDKATOx9cVnbor2d2qASBkUucM='}
            address={property.address}
            price={property.price}
            bedrooms={property.bedrooms}
            bathrooms={property.bathrooms}
            area={property.area}
            agent={property.agent}
            clicked={() => console.log(`Clicked on property with id: ${property.id}`)}
          />
          <div className="property-actions" style={{marginTop:-10,display:'flex',justifyContent:'space-between',backgroundColor:'white',gap:100}}>
            <button onClick={handleEdit} className="action-button">Edit</button>
            <button onClick={() => onDelete(property.id)} className="action-button delete-button">Delete</button>
          </div>
        </>
      )}
    </div>
  );
};

export default PropertyListItem;
