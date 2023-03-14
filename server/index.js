import express from "express";
import mongoose from "mongoose";
import Profile from "./models/index.js"
import { config } from "dotenv"

config()

const PORT = 5000;
const DB_URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.3k7chht.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`

const app = express()
app.use(express.json())

app.post('/starts', async (req, res) => {
    try {
        const note = await Profile.create({ ...req.body })
        res.json(note)
    } catch (err) {
        console.log(err);
    }
})

const startApp = async () => {
    try {
        await mongoose.connect(DB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
        app.listen(PORT, () => console.log("PORT HAS STARTED ON" + PORT))
    } catch (err) {
        console.log(err)
    }
}

startApp()