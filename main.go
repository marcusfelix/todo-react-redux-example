package main

import (
	"log"
	"net/http"
)

func main() {
	static := http.FileServer(http.Dir("./static"))
	http.Handle("/", static)
	log.Printf("Listening on :80")
	err := http.ListenAndServe(":80", nil)
	if err != nil {
		log.Fatal(err)
	}
}
