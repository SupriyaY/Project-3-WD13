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



// create new furnishings


router.post('/', (request, response) => {
    const userId = request.params.userId
    const roomId = request.params.roomId

    const newActivity = request.body

    User.findById(userId)
        .then((user) => {
            const city = user.cities.id(cityId)
            city.activitiesToComplete.push(newActivity)

            return user.save()
        })
        .then(() => {
            response.redirect(`/users/${userId}/cities/${cityId}`)
        })
})
















module.exports = router