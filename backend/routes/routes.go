package routes

import (
	"backend/controllers"
	"backend/middlewares"

	"github.com/gin-gonic/gin"
)

// RegisterRoutes registers all the routes for the application
func RegisterRoutes(router *gin.Engine) {
	// Auth routes
	router.POST("/api/login", controllers.LoginHandler)
	router.GET("/api/customers", controllers.GetCustomers)

	// Protected routes (using middleware for authentication)
	secureRoutes := router.Group("/api/secure")
	secureRoutes.Use(middlewares.AuthMiddleware) // Ensure user is authenticated
	{
		secureRoutes.GET("", controllers.SecureEndpoint)
	}
}
