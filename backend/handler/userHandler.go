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
	req := new(domain.GetUsersPequest)
	if err := e.Bind(req); err != nil {
		return err
	}
	if req.Limit == 0 && req.Offset == 0 {
		req.Limit = 20
	}

	user, err := h.uUsecase.GetUsers(ctx, req)
	if err != nil {
		return e.JSON(http.StatusBadRequest, err.Error())
	}

	return e.JSON(http.StatusOK, user)
}
