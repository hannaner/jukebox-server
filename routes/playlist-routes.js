const express = require('express')
const { handle404 } = require('../lib/custom-errors')
const { requireToken } = require('../config/auth')
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

// CREATE
// POST /playlist
router.post('/playlist', requireToken, (req, res, next) => {
    Playlist.create(req.body.playlist)
        .then((playlist) => {
            res.status(201).json({ playlist: playlist })
        })
})

module.exports = router