package middlewares

import (
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
)

// AuthMiddleware ensures the user is authenticated before accessing protected routes
func AuthMiddleware(c *gin.Context) {
	// Extract the token from the Authorization header (dummy implementation)
	token := c.GetHeader("Authorization")
	if token == "" || token != "Bearer valid-token" { // Replace with real token validation
		// Log the failed authentication attempt
		log.Printf("Unauthorized access attempt: %s", c.ClientIP())

		c.JSON(http.StatusUnauthorized, gin.H{"error": "Unauthorized"})
		c.Abort() // Stop processing further handlers
		return
	}

	// Log the successful authentication
	log.Printf("Authenticated request from: %s", c.ClientIP())

	// Proceed to the next handler
	c.Next()
}
