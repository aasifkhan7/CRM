import React, { useState } from "react";
import { Customer } from "../types/customer"; // Ensure you have a Customer type defined
import styles from "../styles/CreateCustomer.module.css"; // Import CSS module for styling
import { createCustomer } from '../services/api';
import { log } from "console";

const CreateCustomer: React.FC = () => {
  const [formData, setFormData] = useState<Customer>({
    id: null,
    name: "",
    email: "",
    phone: "",
    company: "",
    notes: "",
  });

  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.company) {
      setError("All fields are required!");
      return;
    }

    setError(null);
    setIsSubmitting(true);

    try {
        var data = createCustomer(formData);

    //   if (!response.ok) {
    //     throw new Error("Failed to create customer");
    //   }

      alert("Customer created successfully!");
      setFormData({
        id: null,
        name: "",
        email: "",
        phone: "",
        company: "",
        notes: "",
      });
    } catch (err) {
      setError("Error creating customer. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Create New Customer</h2>
      {error && <div className={styles.error}>{error}</div>}
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputField}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.inputField}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.inputField}>
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.inputField}>
          <label htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.inputField}>
          <label htmlFor="notes">Notes</label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Create Customer"}
        </button>
      </form>
    </div>
  );
};

export default CreateCustomer;
