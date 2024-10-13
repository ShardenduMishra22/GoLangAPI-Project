package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

func main() {
	router := mux.NewRouter()
	router.HandleFunc("/api/news", getNews).Methods("GET")

	log.Fatal(http.ListenAndServe(":8000", router))
}

// Structure of the news

type News struct {
	Title   string `json:"title"`
	Content string `json:"content"`
}

func getNews(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Fetching News")
	fmt.Println("Endpoint Hit: getNews")

	w.Header().Set("Content-Type", "application/json")

	news := []News{
		{
			Title:   "AI - Taking Over the World",
			Content: "AI is taking over the world. It is the future of technology and will be the driving force behind all future innovations.",
		},
		{
			Title:   "Enviornamental Changes",
			Content: "The world is changing. The climate is changing. We need to take action now to save our planet.",
		},
	}

	json.NewEncoder(w).Encode(news)

	// why dont we reutrn anything here?
	// return news
}
