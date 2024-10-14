import express from 'express';
import { getAllArticles, getNews, getArticlesByPreferences } from '../controllers/newsController.js';

const router = express.Router();

// Route to get all articles
router.get('/', getAllArticles);

// Route to fetch news articles
router.get('/fetch', getNews);

// Route to get articles based on user preferences
router.post('/preferences', getArticlesByPreferences);

export default router;
