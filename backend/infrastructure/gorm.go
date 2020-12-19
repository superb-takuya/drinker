package infrastructure

import (
	"os"
	"time"

	"github.com/go-sql-driver/mysql"
	"github.com/jinzhu/gorm"
)

type connectInfo struct {
	Host      string
	Port      string
	Name      string
	User      string
	Pass      string
	Collation string
}

const (
	defaultDBHost      = "db"
	defaultDBPort      = "3306"
	defaultDBName      = "mysql-db"
	defaultDBUser      = "root"
	defaultDBPass      = "password"
	defaultDBCollation = "utf8mb4_unicode_ci"
)

// C var
var C connectInfo

func init() {
	if C.Host = os.Getenv("DB_HOST"); C.Host == "" {
		C.Host = defaultDBHost
	}
	if C.Port = os.Getenv("DB_PORT"); C.Port == "" {
		C.Port = defaultDBPort
	}
	if C.Name = os.Getenv("DB_NAME"); C.Name == "" {
		C.Name = defaultDBName
	}
	if C.User = os.Getenv("DB_USER"); C.User == "" {
		C.User = defaultDBUser
	}
	if C.Pass = os.Getenv("DB_PASS"); C.Pass == "" {
		C.Pass = defaultDBPass
	}
	if C.Collation = os.Getenv("DB_COLLATION"); C.Collation == "" {
		C.Collation = defaultDBCollation
	}

}

// NewGormDB function
func NewGormDB() (*gorm.DB, error) {
	mysqlConf := &mysql.Config{
		User:                 C.User,
		Passwd:               C.Pass,
		Net:                  "tcp",
		Addr:                 C.Host + ":" + C.Port,
		DBName:               C.Name,
		ParseTime:            true,
		Collation:            C.Collation,
		Loc:                  time.Local,
		AllowNativePasswords: true,
	}

	db, err := gorm.Open("mysql", mysqlConf.FormatDSN())
	if err != nil {
		return nil, err
	}

	if err := db.DB().Ping(); err != nil {
		return nil, err
	}

	return db, nil
}
