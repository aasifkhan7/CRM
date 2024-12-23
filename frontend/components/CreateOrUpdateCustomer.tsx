import { useState } from "react";
import styles from "../styles/CreateOrUpdateCustomer.module.css"; // Import the CSS module

const CreateOrUpdateCustomer = () => {
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Create/Update Customer</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputField}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={customer.name}
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputField}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={customer.email}
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputField}>
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={customer.phone}
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputField}>
          <label htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            name="company"
            value={customer.company}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className={styles.button}>
          Save Customer
        </button>
      </form>
    </div>
  );
};

export default CreateOrUpdateCustomer;
