

// App.tsx
import React, { useState } from 'react';
import CustomerList from './Components/CustomerList.tsx';
import CustomerDetails from './Components/CustomerDetails.tsx';
import PhotoGrid from './Components/PhotoGrid.tsx';
import './styles.css';

interface Customer {
  id: number;
  name: string;
  title: string;
  photos: string[];
}

// Function to generate dummy data for customers
const generateCustomers = (count: number): Customer[] => {
  const customers: Customer[] = [];
  for (let i = 1; i <= count; i++) {
    customers.push({
      id: i,
      name: `Customer ${i}`,
      title: `
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.`,
     
      photos: [],
    });
  }
  return customers;
};

const customers: Customer[] = generateCustomers(1000); // Generate 1000 employees

const App: React.FC = () => {
  const [selectedCustomerId, setSelectedCustomerId] = useState<number | null>(null);

  const selectedCustomer = selectedCustomerId ? customers.find((customer) => customer.id === selectedCustomerId) : null;

  return (
    <div className="app">
      <CustomerList
        customers={customers}
        selectedCustomerId={selectedCustomerId}
        onCustomerSelect={(id) => setSelectedCustomerId(id)}
      />
      <div className="details-and-photos">
        {selectedCustomer && <CustomerDetails customer={selectedCustomer} />}
        <PhotoGrid />
      </div>
    </div>
  );
};

export default App;


