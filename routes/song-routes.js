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
    const playlistId = req.body.song.playlistId
    
    Playlist.findById(playlistId).populate('songs')
    .then(handle404)
    .then(playlist => {
        // finding the correct song to remove
        // set constant to identify which index the song to delete is
        let deleteSong

        // iterate through songs array to match the requested ID with the songs[i]._id
        if (playlist.songs.length > 0) {
            for (let i=0; i < playlist.songs.length; i++){
                if (playlist.songs[i]._id == req.params.songId){
                    // once find the specific song, set it to the variable
                    deleteSong = playlist.songs.indexOf(playlist.songs[i])
                }
            }
        }

        if (deleteSong > -1){
            playlist.songs.splice(deleteSong, 1)
        }

        playlist.save()
    })
    .then(() => res.sendStatus(204))
    .catch(next)

})

module.exports = router