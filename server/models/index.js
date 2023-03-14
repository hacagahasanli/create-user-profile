import mongoose from "mongoose";

const Profile = new mongoose.Schema({
    author: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
}, { collection: 'profiles' })

export default mongoose.model('Note', Profile)