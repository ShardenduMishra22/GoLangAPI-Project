import axios from 'axios';

export const getNews = async (req, res) => {
    try {
        const API_KEY = process.env.API_KEY
        const country = "in" 
        const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${API_KEY}`)
        res.json(news.data.articles)
    }catch(error){
        console.log("There is an error in getNews function : newsController.js")
        console.log(error)
        res.status(500).json({message : "Error Fetching the News"})
    }
}