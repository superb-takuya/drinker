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

func (u *userUsecase) GetUsers(c context.Context, req *domain.GetUsersPequest) (domain.GetUsersPesponse, error) {
	res, err := u.userRepo.GetUsers(c, req)
	if err != nil {
		return domain.GetUsersPesponse{}, err
	}
	return res, nil
}
