import axios from "axios";
import { Customer } from '../types/customer';

const API = axios.create({ baseURL: "http://localhost:8080/api/" });

export const getCustomers = async (): Promise<Customer[]> => {
    const x = [
        {
            "id": "aasifid", "name": "Aasif Khan",
            "email": "aasif.khan@example.com",
            "phone": "+1234567890",
            "company": "Tech Corp",
            "notes": "Regular customer"
        },
        {
            "id": "johnid", "name": "John Doe",
            "email": "john.doe@example.com",
            "phone": "+1987654321",
            "company": "Doe Industries",
            "notes": "New customer"
        },
        {
            "id": "janesmithid", "name": "Jane Smith",
            "email": "jane.smith@example.com",
            "phone": "+1122334455",
            "company": "Smith Solutions",
            "notes": "VIP customer"
        },
        {
            "id": "emilyjonesid", "name": "Emily Jones",
            "email": "emily.jones@example.com",
            "phone": "+1456789123",
            "company": "Jones Enterprises",
            "notes": "Pending order"
        },
        {
            "id": "michaelbrownid", "name": "Michael Brown",
            "email": "michael.brown@example.com",
            "phone": "+1987345678",
            "company": "Brown Industries",
            "notes": "Interested in bulk order"
        },
        {
            "id": "sarahmillerid", "name": "Sarah Miller",
            "email": "sarah.miller@example.com",
            "phone": "+1778392045",
            "company": "Miller Solutions",
            "notes": "Looking for discounts"
        },
        {
            "id": "davidwilsonid", "name": "David Wilson",
            "email": "david.wilson@example.com",
            "phone": "+1230987654",
            "company": "Wilson & Co.",
            "notes": "Premium account holder"
        },
        {
            "id": "laurawilliamsid", "name": "Laura Williams",
            "email": "laura.williams@example.com",
            "phone": "+1908765432",
            "company": "Williams Enterprises",
            "notes": "First-time purchase"
        },
        {
            "id": "robertharrisid", "name": "Robert Harris",
            "email": "robert.harris@example.com",
            "phone": "+1245789302",
            "company": "Harris Global",
            "notes": "Feedback requested"
        },
        {
            "id": "lindamartinid", "name": "Linda Martin",
            "email": "linda.martin@example.com",
            "phone": "+1678320912",
            "company": "Martin Corp",
            "notes": "Regular check-in"
        }
    ]
    
    try {
      const response = await API.get("/customers");
      return x
    //   return response.data;
    } catch (error) {
      // Log the error for debugging
      console.error("Error fetching customers:", error);
      return x
    
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

