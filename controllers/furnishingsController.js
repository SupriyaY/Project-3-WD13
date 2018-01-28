const express = require('express')
const router = express.Router()({mergeParams: true})
const User = require('../db/models/User')


//Index
router.get('/', async (request, response) => {
try{
const room = await Room.findbyId(request.params.roomId)
const showFurnishing = room.furnishing
response.json(showFurnishing)
} catch (err) {
console.log(err)
}
})







router.get('/', (request, response) => {
    const userId = request.params.userId

    User
        .findById(userId)
        .then((user) => {
            response.render('cities/index', {
                userName: `${user.name}`,
                userId: user._id,
                cities: user.cities,
                pageTitle: 'Cities'
            })
        })
        .catch((error) => {
            console.log(error)
        })
})








router.get('/:Id', (request, response) => {
    const userId = request.params.userId
    const roomId = request.params.cityId
    const activityId = request.params.activityId

    User
        .findById(userId)
        .then((user) => {
            const room = user
                .room
                .id(roomId)
            const furnishing = room
                .funishingsToAdd
                .id(activityId)

            response.render('activities/show', {userId, city, activity, pageTitle: 'Activities'})
        })
        .catch((error) => {
            console.log(error)
        })
})













module.exports = router