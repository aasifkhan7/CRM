// src/components/CustomerTable.tsx
import React, { useEffect, useState } from 'react';
import { getCustomers } from '../services/api';
import { Customer } from '../types/customer';
import styles from '../styles/Customers.module.css'; // Import the CSS module for customers

const CustomerTable: React.FC = () => {
    const [customers, setCustomers] = useState<Customer[]>([]);

    useEffect(() => {
      getCustomers().then(setCustomers);
    }, []);
  
    return (
      <div className={styles.landingPage}>
        <header className={styles.header}>
          <div className={styles.container}>
            <h1 className={styles.title}>Meet Our Customers</h1>
            <p className={styles.subtitle}>Discover how our customers are using our services.</p>
          </div>
        </header>
        <section className={styles.customers}>
          {customers.map((customer) => (
            <div key={customer.id} className={styles.customerCard}>
              <h2 className={styles.customerName}>{customer.name}</h2>
              <p className={styles.customerDetail}><strong>Email:</strong> {customer.email}</p>
              <p className={styles.customerDetail}><strong>Phone:</strong> {customer.phone}</p>
              <p className={styles.customerDetail}><strong>Company:</strong> {customer.company}</p>
            </div>
          ))}
        </section>
        <footer className={styles.footer}>
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </footer>
      </div>
    );
};

export default CustomerTable;
