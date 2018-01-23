const express = require('express')
const router = express.Router()({mergeParams: true})
const User = require('../db/models/User')

// router.get('/new', (request, response) => {
//     const userId = request.params.userId
//     const cityId = request.params.cityId

//     User
//         .findById(userId)
//         .then((user) => {
//             const city = user
//                 .cities
//                 .id(cityId)

//             response.response('furnishings/new', {userId, room, pageTitle: 'New Furnishing'})
//         })
// })

// router.post('/', (request, response) => {
//     const userId = request.params.userId
//     const cityId = request.params.cityId

//     const newActivity = request.body

//     User
//         .findById(userId)
//         .then((user) => {
//             const city = user
//                 .cities
//                 .id(cityId)
//             city
//                 .activitiesToComplete
//                 .push(newActivity)

//             return user.save()
//         })
//         .then(() => {
//             response.redirect(`/users/${userId}/cities/${cityId}`)
//         })
// })

// router.get('/:activityId', (request, response) => {
//     const userId = request.params.userId
//     const cityId = request.params.cityId
//     const activityId = request.params.activityId

//     User
//         .findById(userId)
//         .then((user) => {
//             const city = user
//                 .cities
//                 .id(cityId)
//             const activity = city
//                 .activitiesToComplete
//                 .id(activityId)

//             response.render('activities/show', {userId, city, activity, pageTitle: 'Activities'})
//         })
//         .catch((error) => {
//             console.log(error)
//         })
// })

// router.get('/:activityId/delete', (request, response) => {
//     const userId = request.params.userId
//     const cityId = request.params.cityId
//     const activityId = request.params.activityId

//     User
//         .findById(userId)
//         .then((user) => {
//             const city = user
//                 .cities
//                 .id(cityId)
//             city
//                 .activitiesToComplete
//                 .id(activityId)
//                 .remove()

//             return user.save()

//         })
//         .then(() => {
//             response.redirect(`/users/${userId}/cities/${cityId}`)

//         })
//         .catch((error) => {
//             console.log(error)
//         })

// })












module.exports = router