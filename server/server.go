package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
)

func main() {
	port, isExist := os.LookupEnv("PORT")

	if !isExist {
		port = "4000"
	}

	clientFiles := http.FileServer(http.Dir("./client/build"))

	http.Handle("/", clientFiles)

	fmt.Printf("Starting server at port " + port + "\n")

	if err := http.ListenAndServe(":"+port, nil); err != nil {
		log.Fatal(err)
	}
}
