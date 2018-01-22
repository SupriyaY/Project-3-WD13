require('dotenv').config()
const User = require('./models/User')
const Room = require('./models/Room')
const Furnishing = require('./models/Furnishing')
const mongoose = require('mongoose')

//Connecting to moongoose database
mongoose.connect(process.env.MONGODB_URI)

mongoose
    .connection
    .once('open', () => {
        console.log(`Mongoose has connected to MongoDB`)
    })

mongoose
    .connection
    .on('error', (error) => {
        console.error(`MongoDB connection error! ${error}`)
        process.exit(-1)
    })




.catch((error) => {
    console.log('Error saving seeded data!')
    console.log(error)
}).then(() => {
    mongoose
        .connection
        .close()
    console.log(`Finished seeding database...
    Disconnected from MongoDB
    `)
})