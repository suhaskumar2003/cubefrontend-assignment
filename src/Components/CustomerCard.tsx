// CustomerCard.tsx
import React from 'react';

interface Customer {
  id: number;
  name: string;
  title: string;
}

interface CustomerCardProps {
  customer: Customer;
  isSelected: boolean;
  onClick: () => void;
}

const CustomerCard: React.FC<CustomerCardProps> = ({ customer, isSelected, onClick }) => {
  return (
    <div className={`customer-card ${isSelected ? 'selected' : ''}`} onClick={onClick}>
      <h3>{customer.name}</h3>
      <p>{customer.title}</p>
    </div>
  );
};

export default CustomerCard;
