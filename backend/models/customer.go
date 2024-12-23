package models

// Customer represents a customer in the system
type Customer struct {
	ID      string `json:"id" bson:"_id"` // BSON tag for MongoDB compatibility
	Name    string `json:"name" bson:"name"`
	Email   string `json:"email" bson:"email"`
	Phone   string `json:"phone" bson:"phone"`
	Company string `json:"company" bson:"company`
	Notes   string `json:"notes" bson:"notes`
}
