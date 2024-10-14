import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import newsRoutes from './routes/news.js';
import userRoutes from './routes/user.js';
import db from './db/connect.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

db();

app.get('/', (req, res) => {
    res.send('API is running properly');
});

app.use('/api/news', newsRoutes);
app.use('/api/user', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
