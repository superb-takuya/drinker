package main

import (
	"log"

	"github.com/labstack/echo"
	handler "github.com/takuya911/drinker/backend/handler"
	infra "github.com/takuya911/drinker/backend/infrastructure"
	repository "github.com/takuya911/drinker/backend/repository"
	usecase "github.com/takuya911/drinker/backend/usecase"
)

func main() {
	db, err := infra.NewGormDB()
	if err != nil {
		log.Fatal(err)
	}
	defer func() {
		err := db.Close()
		if err != nil {
			log.Fatal(err)
		}
	}()
	e := echo.New()
	userRepo := repository.NewUserRepository(db)
	userUsecase := usecase.NewUserUsecase(userRepo)
	handler.NewUserHandler(e, userUsecase)
	log.Fatal(e.Start(":8080"))
}
