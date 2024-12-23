import React, { useEffect, useState } from 'react';
import { getCustomers } from '../services/api';
import { Customer } from '../types/customer';
import styles from '../styles/Dashboard.module.css'; // Import the CSS module for dashboard

const Dashboard: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    getCustomers().then(setCustomers);
  }, []);

  return (
    <div className={styles.dashboardContainer}>
      <h1 className={styles.dashboardHeader}>Dashboard</h1>

      <div className={styles.dashboardCard}>
        <h3>Total Customers</h3>
        <p>{customers.length}</p>
      </div>

      <div className={styles.dashboardCard}>
        <h3>Other Metrics</h3>
        <p>Additional dashboard metrics can go here.</p>
      </div>
    </div>
  );
};

export default Dashboard;
