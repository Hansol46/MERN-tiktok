import mongoose from 'mongoose'

const tiktokSchema = mongoose.Schema({
    video: String,
    channel: String,
    song: String,
    likes: Number,
    messages: String,
    description: String,
    shares: String
})

export default mongoose.model('tiktokVideos', tiktokSchema)