const express = require('express')

const Playlist = require('../models/playlist')

const router = express.Router()

// INDEX 
// GET /playlist
router.get('/playlist', (req, res, next) => {
    Playlist.find()
    .then((playlists) => {
        return playlists.map((playlist) => playlist)
    })
    .then((playlists) => res.status(200).json({ playlists: playlists }))
    .catch(next)
})