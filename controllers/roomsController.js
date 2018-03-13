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



//SHOW a particular room
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





 //Create a room

//  router.get('/new', (request, response) => { 
// const userId = request.params.userId


//  })


router.post('/new', (request, response) => {
    console.log('hit psot route')
const userId = request.params.userId
console.log('the user grabbed', userId)
const newRoom = request.body
console.log('data grabbed from postmant', newRoom)

User.findById(userId)
.then((user) => {
user.rooms.push(newRoom)
return user.save()
})

.then(() => {
response.json(newRoom)
})

.catch((error) => {
console.log(error)
})

})


// Room.create(newRoom)
// .then((newRoom)
// console.log("updates DB")
// response.json(room)
// })
// .catch(err) => {
//     console.error("Room")
// }



 //Delete a room

// router.get(':/roomId/delete' (request, response) => {
// const userId = request.params.userId
// const roomId = request.params.roomId



// User.findby(userId)
// .then((user) => {
// user.rooms.id(roomId).remove()
//return user.save
// })
// .then(() => {
// reponse.redirect(`/users/${userId}/rooms/`)
// })
// .catch((error) => {
//     .console.log(error)

// })


// })

module.exports = router


