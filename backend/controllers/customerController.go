package controllers

import (
	"backend/models"
	"backend/services"
	"log"

	"github.com/gin-gonic/gin"
)

// GetCustomers is the HTTP handler to get all customers
func GetCustomers(c *gin.Context) {
	// Fetch customers from the service
	customers, err := services.GetCustomers()
	if err != nil {
		// Log error and respond with a JSON error message
		log.Println("Error fetching customers:", err)
		c.JSON(500, gin.H{"error": "Error fetching customers"})
		return
	}
	// Return the customers in JSON format
	c.JSON(200, customers)
}

// CreateCustomer is the HTTP handler to create a new customer
func CreateCustomer(c *gin.Context) {
	var customer models.Customer

	// Bind the request body to the customer struct
	if err := c.ShouldBindJSON(&customer); err != nil {
		// Log the error and send a response if binding fails
		log.Println("Invalid customer data:", err)
		c.JSON(400, gin.H{"error": "Invalid customer data"})
		return
	}

	// Create customer through the service
	result, err := services.CreateCustomer(customer)
	if err != nil {
		// Log error and respond with a JSON error message
		log.Println("Error creating customer:", err)
		c.JSON(500, gin.H{"error": "Error creating customer"})
		return
	}

	// Return the result in JSON format
	c.JSON(201, result)
}
