package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

// LoginHandler handles user login requests
func LoginHandler(c *gin.Context) {
	var credentials struct {
		Email    string `json:"email"`
		Password string `json:"password"`
	}

	// Decode the JSON request body
	if err := c.ShouldBindJSON(&credentials); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request payload"})
		return
	}

	// Authentication logic (dummy implementation)
	if credentials.Email == "test@example.com" && credentials.Password == "password123" {
		c.JSON(http.StatusOK, gin.H{"message": "Login successful"})
	} else {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid credentials"})
	}
}

// SecureEndpoint handles a secure endpoint that requires authentication
func SecureEndpoint(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"message": "You have accessed a secure endpoint!"})
}
