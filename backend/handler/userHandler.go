package handler

import (
	"net/http"

	"github.com/labstack/echo"
	"github.com/takuya911/drinker/backend/domain"
)

// UserHandler struct
type userHandler struct {
	uUsecase domain.UserUsecase
}

// NewUserHandler func
func NewUserHandler(e *echo.Echo, us domain.UserUsecase) {
	handler := &userHandler{
		uUsecase: us,
	}
	// routing
	e.GET("/user", handler.GetUsers)
}

func (h *userHandler) GetUsers(e echo.Context) error {
	ctx := e.Request().Context()
	user, err := h.uUsecase.GetUsers(ctx, 1, 1)
	if err != nil {
		return e.JSON(http.StatusBadRequest, err.Error())
	}

	return e.JSON(http.StatusOK, user)
}
