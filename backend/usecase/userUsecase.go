package usecase

import (
	"context"

	"github.com/takuya911/drinker/backend/domain"
)

type userUsecase struct {
	userRepo domain.UserRepository
}

// NewUserUsecase func
func NewUserUsecase(ur domain.UserRepository) domain.UserUsecase {
	return &userUsecase{
		userRepo: ur,
	}
}

func (u *userUsecase) GetUsers(c context.Context, limit int32, offset int32) ([]domain.User, error) {
	res, err := u.userRepo.GetUsers(c, limit, offset)
	if err != nil {
		return nil, err
	}
	return res, nil
}
