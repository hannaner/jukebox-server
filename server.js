const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const db = require('./config/db')

const requestLogger = require('./lib/request-logger')
const userRoutes = require('./routes/user-routes')
const playlistRoutes = require('./routes/playlist-routes')
const songRoutes = require('./routes/song-routes')

const PORT = 8000

mongoose.set('strictQuery', true)

mongoose.connect(db, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})

const app = express()

app.use(cors({ origin: `http://127.0.0.1:5500` }))

app.use(express.json())
app.use(requestLogger)

app.use(userRoutes)
app.use(playlistRoutes)
app.use(songRoutes)

app.listen(PORT, () => {
    console.log(`listening to ${PORT}`)
})

module.exports = app