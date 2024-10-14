import axios from 'axios';
import Article from '../models/Article.js';

export const getNews = async (req, res) => {
    try {
        const API_KEY = process.env.API_KEY;
        const country = 'in';
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${API_KEY}`);

        if (!response.data.articles || response.data.articles.length === 0) {
            return res.status(404).json({ message: 'No articles found' });
        }

        res.json(response.data.articles);
    } catch (error) {
        console.error('Error in getNews function:', error);
        res.status(500).json({ message: 'Error Fetching the News' });
    }
};

export const getAllArticles = async (req, res) => {
    try {
        const articles = await Article.find();
        res.json(articles);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching articles', error });
    }
};

export const getArticlesByPreferences = async (req, res) => {
    const { preferences } = req.body;
    try {
        const articles = await Article.find({ preferences: { $in: preferences } });
        res.json(articles);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching articles by preferences', error });
    }
};
