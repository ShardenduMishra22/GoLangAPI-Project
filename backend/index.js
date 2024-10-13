import mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import db from "./db/db.js";
import cors from 'cors';

const PORT = 3000;
const app = express();

app.use(express.json())
app.use(cors())

dotenv.config();
db();

const url = `http://localhost:${PORT}`;

app.get("/",(req,res) => {
    res.send("API is running Properly");
})

app.listen(PORT, () => {
    console.log(`Connection on ${url}: `.yellow.bold);
    console.log(`Server is running on port ${PORT}`.yellow.bold);
})