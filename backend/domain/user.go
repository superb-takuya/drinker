package domain

import (
	"context"
	"time"
)

type (
	// User struct
	User struct {
		ID         int        `json:"user_id" gorm:"primary_key"`
		NickName   string     `json:"nick_name" validate:"required"`
		Email      string     `json:"email" validate:"required,email"`
		Password   string     `json:"password" validate:"min=6,max=75"`
		Icon       string     `json:"icon"`
		Images     []string   `json:"image"`
		Credit     int32      `json:"credit"`
		DisplayFlg int32      `json:"display_flg"`
		FreeTime   string     `json:"free_time"`
		ChatApp    []int      `json:"chat_app"`
		Introduct  string     `json:"introduct"`
		CreatedAt  time.Time  `json:"created_at"`
		UpdatedAt  *time.Time `json:"updated_at"`
		DeletedAt  *time.Time `json:"deleted_at"`
	}
	// UserUsecase interface
	UserUsecase interface {
		GetUsers(ctx context.Context, req *GetUsersPequest) (GetUsersPesponse, error)
	}
	// UserRepository interface
	UserRepository interface {
		GetUsers(ctx context.Context, req *GetUsersPequest) (GetUsersPesponse, error)
	}
	// GetUsersPequest struct
	GetUsersPequest struct {
		Limit  int `json:"limit" query:"limit"`
		Offset int `json:"offset" query:"offset"`
	}
	// GetUsersPesponse struct
	GetUsersPesponse struct {
		Users []User
	}
)
