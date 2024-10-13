package main

import (
	"context"
	"encoding/json"
	"fmt"
	"github/ShardenduMishra22/db"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

func main() {
	client := db.Db() // Initialize MongoDB connection
	defer func() {
		if err := client.Disconnect(context.TODO()); err != nil {
			log.Fatalf("Failed to disconnect MongoDB client: %v", err)
		}
	}()

	router := mux.NewRouter()
	router.HandleFunc("/api/news", getNews).Methods("GET")

	fmt.Println("http://localhost:8000")
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
			Title:   "Environmental Changes",
			Content: "The world is changing. The climate is changing. We need to take action now to save our planet.",
		},
	}

	err := json.NewEncoder(w).Encode(news)
	if err != nil {
		log.Printf("Error encoding JSON: %v", err)
		http.Error(w, "Error encoding JSON", http.StatusInternalServerError)
		return // Add return here to avoid further attempts to write to the response
	}
}
