const express = require('express')
const router = express.Router({mergeParams: true})
const User = require('../db/models/User')


//Index page for all of the furnishings
router.get('/', async (request, response) => {
try{
const userId = request.params.userId
const roomId = request.params.roomId
const user = await User.findById(userId)
console.log(user)
const room = user.rooms.id(roomId)
console.log(room)
response.json(room.furnishingsToAdd)
} catch (err) {
console.log(err)
}

})


















module.exports = router