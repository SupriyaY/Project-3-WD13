const express = require('express')
const router = express.Router()({mergeParams: true})
const User = require('../db/models/User')



// router.get('/', (request, response) => {
//     const userId = request.params.userId
//     User.findById(userId)
//         .then((user) => {
//             response.json(user)
//             })
//         .catch((error) => {
//             console.log(error)
//         })
// })



// router.get('/:cityId', (request, response) => {
//     const userId = request.params.userId
//     const cityId = request.params.cityId

//     User
//         .findById(userId)
//         .then((user) => {
//             const city = user
//                 .cities
//                 .id(cityId)
//             response.render('cities/show', {userId, city, pageTitle: 'City'})
//         })
//         .catch((error) => {
//             console.log(error)
//         })
// })







module.exports = router