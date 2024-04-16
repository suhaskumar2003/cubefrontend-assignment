// CustomerList.tsx
import React from 'react';
import CustomerCard from './CustomerCard.tsx';

interface Customer {
  id: number;
  name: string;
  title: string;
}

interface CustomerListProps {
  customers: Customer[];
  selectedCustomerId: number | null;
  onCustomerSelect: (id: number) => void;
}

const CustomerList: React.FC<CustomerListProps> = ({ customers, selectedCustomerId, onCustomerSelect }) => {
  return (
    <div className="customer-list">
      {customers.map((customer) => (
        <CustomerCard
          key={customer.id}
          customer={customer}
          isSelected={customer.id === selectedCustomerId}
          onClick={() => onCustomerSelect(customer.id)}
        />
      ))}
    </div>
  );
};

export default CustomerList;
