const mongoose = require('mongoose')
const Schema = mongoose.Schema

const songSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        artist: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
        }
    }, {
        timestamps: true
    }
)

// handing noteSchema over, not as a model, to playlistSchema
module.exports = songSchema