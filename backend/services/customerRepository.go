package services

import (
	"backend/config"
	"backend/models"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

// GetCustomerCollection returns the customer collection from MongoDB
func GetCustomerCollection() *mongo.Collection {
	return config.GetCollection("customers")
}

// GetCustomers fetches all customers from the database
func GetCustomersFromDB() ([]models.Customer, error) {
	customerCollection := GetCustomerCollection()
	var customers []models.Customer

	cursor, err := customerCollection.Find(nil, bson.M{})
	if err != nil {
		return nil, err
	}
	defer cursor.Close(nil)

	for cursor.Next(nil) {
		var customer models.Customer
		if err := cursor.Decode(&customer); err != nil {
			return nil, err
		}
		customers = append(customers, customer)
	}

	if err := cursor.Err(); err != nil {
		return nil, err
	}

	return customers, nil
}

// CreateCustomer inserts a new customer into the database
func CreateCustomerInDB(customer models.Customer) (*mongo.InsertOneResult, error) {
	customerCollection := GetCustomerCollection()
	result, err := customerCollection.InsertOne(nil, customer)
	if err != nil {
		return nil, err
	}
	return result, nil
}
