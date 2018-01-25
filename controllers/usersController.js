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
router.get('/new', (request, response) => {
    response.json('users/new', {pageTitle: 'New User'})
})
router.post('/', (request, response) => {
    const newUser = request.body
    if (!newUser.photo_url) {
        newUser.photo_url = 'https://i.imgur.com/xln20Nb.jpg?1'

    }
    User.create(newUser)
        .then(() => {
            response.json(newUser)
        })
        .catch((error) => {
            console.log(error)
        })
})


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
// router.patch('/:userId', (request, response) => {
//     const userId = request.params.userId
//     const updatedUserInfo = request.body
//     User.findByIdAndUpdate(userId, updatedUserInfo, {new: true})

//     response.json(UpdatedUser)
//         .catch((error) => {
//             console.log
//         })

// })




//EDIT
// router.get('/:userId/edit', (request, response) => {
//     const userId = request.params.userId
//     User
//         .findById(userId)
//         .then((user) => {
//             response.json('users/edit', {user, pageTitle: 'Profile_Update'})
//         })
//         .catch((error) => {
//             console.log
//         })

// })


// //DELETE
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