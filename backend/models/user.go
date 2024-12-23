package models

// User represents a user in the system
type User struct {
	ID       string `json:"id" bson:"_id"`       // BSON tag for MongoDB compatibility
	Name     string `json:"name" bson:"name"`   // User's name
	Email    string `json:"email" bson:"email"` // User's email
	Password string `json:"password" bson:"password"` // User's hashed password
	Role     string `json:"role" bson:"role"`   // Role (e.g., admin, user)
}

