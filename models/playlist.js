const mongoose = require('mongoose')
const songSchema = require('./song')

const Schema = mongoose.Schema

const playlistSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        songs: [songSchema],
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    },
    {
        timestamps: true
    }
)

const Playlist = mongoose.model('Playlist', playlistSchema)

module.exports = Playlist