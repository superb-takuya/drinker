package repository

import (
	"context"

	"github.com/jinzhu/gorm"
	"github.com/takuya911/drinker/backend/domain"
)

type userRepository struct {
	Conn *gorm.DB
}

// NewUserRepository func
func NewUserRepository(Conn *gorm.DB) domain.UserRepository {
	return &userRepository{Conn}
}

func (m *userRepository) GetUsers(ctx context.Context, limit int32, offset int32) ([]domain.User, error) {
	res := []domain.User{}
	return res, nil
}
