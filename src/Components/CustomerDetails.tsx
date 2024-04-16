// // CustomerDetails.tsx

import React from 'react';

interface Customer {
  name: string;
  title: string;
  address: string;
  photos: string[];
}

interface CustomerDetailsProps {
  customer: Customer;
  titlePrefix: string; // New prop for title prefix
}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ customer, titlePrefix }) => {
  return (
    <div className="customer-details">
      <h2>{`${customer.name} Details here`}</h2>
      <h3>{customer.title}</h3>
      <p>{customer.address}</p>
      <div className="photo-grid">
        {customer.photos.map((photo, index) => (
          <img key={index} src={photo} alt={`Photo ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default CustomerDetails;

