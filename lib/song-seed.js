const express = require('express')
const mongoose = require('mongoose')

const songSchema = require('../models/song')
const Song = mongoose.model('Song', songSchema)

const router = express.Router()

const starterSongs = [
    {
        title: 'Heavy, California',
        artist: 'Jungle'
    },
    {
        title: 'Disco Yes',
        artist: 'Tom Misch'
    },
    {
        title: 'Saudade Vem Correndo',
        artist: 'Stan Getz, Maria Helena Toledo'
    },
    {
        title: 'Kill Bill',
        artist: 'SZA'
    },
    {
        title: '666',
        artist: 'Sugar Candy Mountain'
    },
    {
        title: 'cloud castle',
        artist: 'luna li'
    },
    {
        title: 'A Couple Things',
        artist: 'Kate Bollinger'
    },
    {
        title: 'Boca Chica',
        artist: 'MUNYA'
    },
    {
        title: 'Borrowed Time',
        artist: 'Tennis'
    },
    {
        title: 'Crimson and Clover',
        artist: 'The Shacks'
    },
    {
        title: 'The Last One',
        artist: 'First Aid Kit'
    },
    {
        title: 'Second Date',
        artist: 'Josh Fudge'
    },
    {
        title: 'Sense',
        artist: 'King Gizzard & The Lizard Wizard'
    }
]

router.get('/songs', (req, res, next) => {
    Song.create(starterSongs)
        .then((songs) => res.status(200).json({ songs: songs }))
        .catch(next)
})

module.exports = router