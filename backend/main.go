package main

import (
	"backend/config" // Database configuration
	"backend/routes" // Route definitions
	"log"

	"github.com/gin-gonic/gin"
	// Router package
)

func main() {
	// Initialize the database connection
	config.ConnectDB()

	// Create a new Gin router
	router := gin.Default()

	// Register routes
	routes.RegisterRoutes(router)

	// Start the server
	if err := router.Run(":8080"); err != nil {
		log.Fatalf("Failed to start server: %v", err)
	}
}
