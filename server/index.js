import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv"
import router from "./router/index.js";
import cors from 'cors'


config()

const PORT = 5000;
const DB_URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.3k7chht.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`

const app = express()
const allowedOrigins = [process.env.VALID_ORIGIN_1, process.env.VALID_ORIGIN_2];

const corsOptions = {
    origin: function (origin, callback) {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
};

app.use(cors(corsOptions))
app.use(express.json())
app.use('/ms', router)

const startApp = async () => {
    try {
        await mongoose.connect(DB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
        app.listen(PORT, () => console.log("PORT HAS STARTED ON" + PORT))
    } catch (err) {
        console.log(err)
    }
}

startApp()