const express = require('express')
const router = express.Router()({mergeParams: true})
const User = require('../db/models/User')

//INDEX page for all of the cities
router.get('/', async(request, response) => {
    try {
        const userId = request.params.userId
        const user = await User.findById({})
        response.json(rooms)
    } catch (err) {
        console.log(err)
    }
})

//SHOW
router.get('/:roomId', async(request, response) => {
    try {
        const roomId = request.params.roomId
        const room = await Room.findById(request.params.roomId)
        response.json(room)
    } catch (err) {
        response.send(err)
    }
})

module.exports = router