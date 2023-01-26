const express = require('express')
const { handle404 } = require('../lib/custom-errors')
const { requireToken } = require('../config/auth')
const Playlist = require('../models/playlist')

const router = express.Router()


// INDEX
// GET /songs
router.get('/songs', requireToken, (req, res, next) => {

})

// CREATE
// POST /songs
router.post('/songs', requireToken, (req, res, next) => {
    const playlistId = req.body.song.playlistId

    const song = req.body.song
    
    Playlist.findById(playlistId)
        .then(handle404)
        .then(playlist => {
            playlist.songs.push(song)
            
            return playlist.save()
        })
        .then(playlist => {
            res.status(201).json({ playlist: playlist })
        })
        .catch(next)
})


// DELETE
// DELETE /songs/:songId
router.delete('/songs/:songId', (req, res, next) => {
    console.log(req.body)
    const playlistId = req.body.song.playlistId
    
    console.log(playlistId)

    Playlist.findById(playlistId)
    .then(handle404)
    .then(playlist => {
        // finding the correct song to remove
        // .remove() we delete it
        playlist.songs.id(req.params.songId).remove()
        
        // save since these are modified
        playlist.save()
    })
    .then(() => res.sendStatus(204))
    .catch(next)

})

module.exports = router