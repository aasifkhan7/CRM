import axios from "axios";
import { Customer } from '../types/customer';

const API = axios.create({ baseURL: "http://localhost:8080/api/" });

export const getCustomers = async (): Promise<Customer[]> => {
    try {
      const response = await API.get("/customers");
      return response.data
    //   return response.data;
    } catch (error) {
      // Log the error for debugging
      console.error("Error fetching customers:", error);
      return []
    
      // Handle different error types gracefully
    //   if (error.response) {
    //     // The server responded with a status other than 2xx
    //     console.error("Response error:", error.response.data);
    //     throw new Error("Error fetching customers: " + error.response.data.message || "Unknown error");
    //   } else if (error.request) {
    //     // No response was received from the server
    //     console.error("Request error:", error.request);
    //     throw new Error("Network error: Could not reach the server.");
    //   } else {
    //     // Other errors
    //     console.error("General error:", error.message);
    //     throw new Error("An unexpected error occurred.");
    //   }
    }
  };

export const createCustomer = async (customer: Partial<Customer>) => {
    const response = await API.post("/customers", customer);
    return response.data;
};
  
  // Update an existing customer
  export const updateCustomer = async (customer: Customer) => {
    const response = await API.put(`/customers/${customer.id}`, customer);
    return response.data;
  };
  
  // Get a single customer by ID
  export const getCustomer = async (id: string) => {
    const response = await API.get(`/customers/${id}`);
    return response.data;
  };

