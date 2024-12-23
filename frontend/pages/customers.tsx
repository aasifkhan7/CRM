import React, { useState } from "react";
import CustomerTable from "../components/CustomerTable";
import CreateCustomer from "../components/CreateCustomer";
import styles from "../styles/Customers.module.css";

const CustomersPage: React.FC = () => {
  const [isCreatingCustomer, setIsCreatingCustomer] = useState<boolean>(false);

  const toggleCreateCustomer = () => {
    setIsCreatingCustomer((prevState) => !prevState);
  };

  return (
    <div className={styles.customersPageContainer}>
      <div className={styles.dashboardHeader}>
        <h1>{isCreatingCustomer ? "Create New Customer" : "Customer Dashboard"}</h1>
        <button 
          className={styles.toggleButton} 
          onClick={toggleCreateCustomer}
        >
          {isCreatingCustomer ? "Back to Customers" : "Create New Customer"}
        </button>
      </div>

      <div className={styles.mainContent}>
        {isCreatingCustomer ? (
          <CreateCustomer /> // Render CreateCustomer component when `isCreatingCustomer` is true
        ) : (
          <CustomerTable /> // Render the CustomerTable when `isCreatingCustomer` is false
        )}
      </div>
    </div>
  );
};

export default CustomersPage;
