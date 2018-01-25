const express = require('express')
const router = express.Router()({mergeParams: true})
const User = require('../db/models/User')



// router.get('/:activityId', (request, response) => {
//     const userId = request.params.userId
//     const roomId = request.params.cityId
//     const activityId = request.params.activityId

//     User
//         .findById(userId)
//         .then((user) => {
//             const room = user
//                 .room
//                 .id(roomId)
//             const furnishing = room
//                 .funishingsToAdd
//                 .id(activityId)

//             response.render('activities/show', {userId, city, activity, pageTitle: 'Activities'})
//         })
//         .catch((error) => {
//             console.log(error)
//         })
// })













module.exports = router