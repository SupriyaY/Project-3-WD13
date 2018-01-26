const express = require('express')
const router = express.Router({mergeParams:true})
const User = require('../db/models/User')


///INDEX
router.get('/', (request, response) => {
    User.find({})
        .then(users => {
            response.json(users)
        })
        .catch((error) => 
            console.log(error))
    
})



///NEW USER
// router.get('/new', (request, response) => {
//     response.json(){pageTitle: 'New User'})
// })
router.post('/', (request, response) => {
    console.log('posting new user', request.body)
    const newUser = request.body
    if (!newUser.photo_url) {
        newUser.photo_url = 'https://i.imgur.com/xln20Nb.jpg?1'

    }
    console.log("About to update DB")
    User.create(newUser)
.then((user) => {
    console.log("updates DB")
            response.json(user)
        })
        .catch((err) => {
            console.error("SHIT", err)
            response.send(err)
        })
})

// router.post('/', async(req, res) => {
//     try {
//         const newUser = await User.create(req.body)
//         res.json(newUser)
//     } catch (err) {
//         console.log(err)
//         res.sendStatus(500)
//     }
// })



//SHOW
router.get('/:userId', (request, response) => {
    const userId = request.params.userId
    User
        .findById(userId)
        .then((user) => {
            response.json(user)

        })
        .catch((error) => {
            console.log(error)

        })
})


//UPDATE
// router.patch('/:userId', (req, res) => {
//     const userUpdate = req.body
//     const userId = req.params.userId

//     User
//         .findByIdAndUpdate(userId, userUpdate)
//         .then(user => {
//             res.json(user)
//         })
//         .catch((err) => {
//             console.log(err)
//         })
// })


//DELETE
router.delete('/:userId', (request, response) => {
    const userId = request.params.userId
    console.log(userId)
    User
        .findByIdAndRemove(userId)
        .then(() => {
            response.json({isDeleted : "true"})
        })
        .catch((error) => {
            console.log(error)
        })

})




module.exports = router