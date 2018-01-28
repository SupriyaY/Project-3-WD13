const express = require('express')
const router = express.Router()({mergeParams: true})
const User = require('../db/models/User')


//INDEX
router.get('/', (request, response) => {
    const userId = request.params.userId
    User.findById(userId)
        .then((user) => {
            response.json(user)
            })
        .catch((error) => {
            console.log(error)
        })
})




//SHOW
router.get('/:roomId', (request, response) => {
    const roomId = request.params.roomId

    User
        .findById(userId)
        .then((user) => {
            const room = user
                .rooms
                .id(roomId)
            response.json(userId, room)
        })
        .catch((error) => {
            console.log(error)
        })
})







module.exports = router