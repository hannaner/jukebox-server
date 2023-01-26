const mongoose = require('mongoose')
require('mongoose-type-url')
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
        url: {
            link: {
                type: mongoose.SchemaTypes.Url,
                required: true
            }
        }
    }, {
        timestamps: true
    }
)

// handing noteSchema over, not as a model, to playlistSchema
module.exports = songSchema