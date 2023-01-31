const express = require('express')

const { handle404 } = require('../lib/custom-errors')
const { requireToken } = require('../config/auth')
const Playlist = require('../models/playlist')

const router = express.Router()

// INDEX 
// GET /playlists
router.get('/playlists', requireToken, (req, res, next) => {
    Playlist.find({
        'owner': req.user._id
    })
    .then((playlists) => {
        return playlists.map((playlist) => playlist)
    })
    .then((playlists) => res.status(200).json({ playlists: playlists }))
    .catch(next)
})

// SHOW
// GET /playlists/:playlistId
router.get('/playlists/:playlistId', requireToken, (req, res, next) => {
    Playlist.findById(req.params.playlistId).populate('songs')
        .then(handle404)
        .then((playlist) => {
            res.status(200).json({ playlist: playlist })})
        .catch(next)
})


// CREATE
// POST /playlists
router.post('/playlists', requireToken, (req, res, next) => {
    const playlist = req.body.playlist
    playlist.owner = req.user._id
    
    Playlist.create(req.body.playlist)
        .then((playlist) => {
            res.status(201).json({ playlist: playlist })
        })
        .catch(next)
})

// UPDATE
// PATCH /playlists/:playlistId
router.patch('/playlists/:playlistId', requireToken, (req, res, next) => {
    Playlist.findById(req.params.playlistId)
        .then(handle404)
        .then((playlist) => {
            return playlist.updateOne(req.body.playlist)
        })
        .then(() => res.sendStatus(204))
        .catch(next)
})

// DELETE
// DELETE /playlists/:playlistId
router.delete('/playlists/:playlistId', requireToken, (req, res, next) => {
    Playlist.findById(req.params.playlistId)
        .then(handle404)
        .then((playlist) => {
            playlist.deleteOne()
        })
        .then(() => res.sendStatus(204))
        .catch(next)
})

module.exports = router