import cors from 'cors'
import express from "express";
import { config } from "dotenv"
import router from "./router/index.js";
import { corsOptions } from "./helpers/index.js";
import mongoose from 'mongoose';

config()

const PORT = 5000;
const DB_URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.3k7chht.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`

const app = express()

app.use(cors(corsOptions))
app.use(express.json())
app.use('/ms', router)

export const startApp = async () => {
    try {
        await mongoose.connect(DB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
        app.listen(PORT, () => console.log("PORT HAS STARTED ON" + PORT))
    } catch (err) {
        console.log(err)
    }
}

startApp()