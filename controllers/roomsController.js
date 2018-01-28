const express = require('express')
const router = express.Router({mergeParams: true})
const User = require('../db/models/User')

//INDEX page for all of the rooms
router.get('/', async(request, response) => {
    try {
        const userId = request.params.userId
        const user = await User.findById(userId)
        response.json(user.rooms)
    } catch (err) {
        console.log(err)
    }
})




//SHOW
router.get('/:roomId', async(request, response) => {
    try {
        const userId = request.params.userId
        const roomId = request.params.roomId
        const user = await User.findById(userId)
        response.json(user.rooms.id(roomId))
    } catch (err) {
        response.send(err)
    }
})

module.exports = router