// pages/index.tsx
import Navbar from '../components/Navbar';
import LandingPage from '../components/LandingPage';
import { useEffect, useState } from 'react';
import { getCustomers } from '../services/api';

import styles from '../styles/Home.module.css'; // Import the Home page styles


const HomePage = () => {
  const [customerCount, setCustomerCount] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCustomerCount = async () => {
      try {
        const customers = await getCustomers();
        setCustomerCount(customers.length);
      } catch (error) {
        console.error('Error fetching customers:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCustomerCount();
  }, []);

  return (
    <div>
      <Navbar />
      <div className={styles.homePage}>
        <h1>Welcome to the CRM App</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <p>Total Customers: {customerCount}</p>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
