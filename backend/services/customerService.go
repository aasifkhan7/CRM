package services

import (
	"backend/models"
	"log"

	"github.com/google/uuid"
	"go.mongodb.org/mongo-driver/mongo"
)

// GetCustomers fetches all customers using the repository layer
func GetCustomers() ([]models.Customer, error) {
	customers, err := GetCustomersFromDB()
	if err != nil {
		log.Println("Error fetching customers from repository:", err)
		return nil, err
	}
	return customers, nil
}

// CreateCustomer inserts a new customer by interacting with the repository
func CreateCustomer(customer models.Customer) (*mongo.InsertOneResult, error) {
	customer.ID = uuid.New().String()
	result, err := CreateCustomerInDB(customer)
	if err != nil {
		log.Println("Error creating customer:", err)
		return nil, err
	}
	return result, nil
}
