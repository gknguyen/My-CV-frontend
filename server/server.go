package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {
	clientFiles := http.FileServer(http.Dir("./client/build"))

	http.Handle("/", clientFiles)

	fmt.Printf("Starting server at port 4000\n")

	if err := http.ListenAndServe(":4000", nil); err != nil {
		log.Fatal(err)
	}
}
