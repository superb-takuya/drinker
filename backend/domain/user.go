package domain

import (
	"context"
	"time"
)

type (
	// User struct
	User struct {
		ID        int        `json:"user_id" gorm:"primary_key"`
		Name      string     `json:"name" validate:"required"`
		Email     string     `json:"email" validate:"required,email"`
		Password  string     `json:"password" validate:"min=6,max=75"`
		CreatedAt time.Time  `json:"created_at"`
		UpdatedAt *time.Time `json:"updated_at"`
		DeletedAt *time.Time `json:"deleted_at"`
	}
	// UserUsecase interface
	UserUsecase interface {
		GetUsers(ctx context.Context, limit int32, offset int32) ([]User, error)
	}
	// UserRepository interface
	UserRepository interface {
		GetUsers(ctx context.Context, limit int32, offset int32) ([]User, error)
	}
)
