require('dotenv').config()
const User = require('./models/User')
const Room = require('./models/Room')
const Furnishing = require('./models/Furnishing')
const mongoose = require('mongoose')

//Connecting to moongoose database
mongoose.connect(process.env.MONGODB_URI)

mongoose.Promise = global.Promise

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

//Create and delete users
User
    .remove({})
    .then(() => {
        const ared = new User({
        username: 'AReddick', 
        name: 'Ayana Reddick', 
        email: 'areddick@gmail.com', 
            photo_url: 'https://i.imgur.com/PBHBfWV.png'})

        const bedone = new Room({room_name: 'Bedroom'})
        const furnone = new Furnishing({
            furniture_url: "https://www.wayfair.com/",
            furniture_img: "",
            light_url: "https://www.wayfair.com/",
            light_img: "",
            rug_url: "https://www.wayfair.com/",
            rug_img: ""
        })

        bedone
            .furnishingsToAdd
            .push(furnone)

        const bathone = new Room({room_name: 'Bathroom'})
        const furntwo = new Furnishing({
            furniture_url: "https://www.wayfair.com/",
            furniture_img: "",
            light_url: "https://www.wayfair.com/",
            light_img: "",
            rug_url: "https://www.wayfair.com/",
            rug_img: "https://i.imgur.com/t0AA3GA.png?1"
        })

        bathone
            .furnishingsToAdd
            .push(furntwo)

        const livingone = new Room({room_name: 'Living Room'})
        const furnthree = new Furnishing({
            furniture_url: "https://www.wayfair.com/",
            furniture_img: "https://i.imgur.com/5hq2Mo2.png?1",
            light_url: "https://www.wayfair.com/",
            light_img: "",
            rug_url: "https://www.wayfair.com/",
            rug_img: "https://i.imgur.com/71NadJP.jpg?1"
        })

        livingone
            .furnishingsToAdd
            .push(furnthree)

        const kitchenone = new Room({room_name: 'Kitchen'})
        const furnfour = new Furnishing({
            furniture_url: "https://www.wayfair.com/",
            furniture_img: "https://i.imgur.com/pLU1ST9.jpg?1",
            light_url: "https://www.wayfair.com/",
            light_img: "",
            rug_url: "https://www.wayfair.com/",
            rug_img: ""
        })

        kitchenone
            .furnishingsToAdd
            .push(furnfour)

        ared
            .rooms
            .push(bedone, bathone, livingone, kitchenone)

        return ared.save()
    })
    .then(() => {

        const bschoenfeld = new User({ username: 'BSchen', name: 'Beth Schoenfeld', email: 'bschoen@gmail.com', photo_url: 'https://i.imgur.com/9KsoBu7.png'})

        const bedtwo = new Room({room_name: 'Bedroom'})
        const furnfive = new Furnishing({
            furniture_url: "https://www.wayfair.com/",
            furniture_img: "",
            light_url: "https://www.wayfair.com/",
            light_img: "",
            rug_url: "https://www.wayfair.com/",
            rug_img: ""
        })

        bedtwo
            .furnishingsToAdd
            .push(furnfive)

        const bathtwo = new Room({room_name: 'Bathroom'})
        const furnsix = new Furnishing({
            furniture_url: "https://www.wayfair.com/",
            furniture_img: "",
            light_url: "https://www.wayfair.com/",
            light_img: "",
            rug_url: "https://www.wayfair.com/",
            rug_img: "https://i.imgur.com/t0AA3GA.png?1"
        })

        bathtwo
            .furnishingsToAdd
            .push(furnsix)

        const livingtwo = new Room({room_name: 'Living Room'})
        const furnseven = new Furnishing({
            furniture_url: "https://www.wayfair.com/",
            furniture_img: "",
            light_url: "https://www.wayfair.com/",
            light_img: "",
            rug_url: "https://www.wayfair.com/",
            rug_img: "https://i.imgur.com/t0AA3GA.png?1"
        })

        livingtwo
            .furnishingsToAdd
            .push(furnseven)

        const kitchentwo = new Room({room_name: 'Kitchen'})
        const furneight = new Furnishing({
            furniture_url: "https://www.wayfair.com/",
            furniture_img: "https://i.imgur.com/5hq2Mo2.png?1",
            light_url: "https://www.wayfair.com/",
            light_img: "",
            rug_url: "https://www.overstock.com/",
            rug_img: ""
        })

        kitchentwo
            .furnishingsToAdd
            .push(furneight)

        bschoenfeld
            .rooms
            .push(bedtwo, bathtwo, livingtwo, kitchentwo)

        return bschoenfeld.save()

    })
    .then(() => {
        const okhunlee = new User({username: 'Olee', 
        name: 'Okhyun Lee', 
        email: 'olee@gmail.com', 
            photo_url: 'https://i.imgur.com/7DPmEBi.png'
})

        const bedthree = new Room({room_name: 'Bedroom'})
        const furnnine = new Furnishing({
            furniture_url: "https://www.wayfair.com/",
            furniture_img: "",
            light_url: "https://www.wayfair.com/",
            light_img: "",
            rug_url: "https://www.wayfair.com/",
            rug_img: ""
        })

        bedthree
            .furnishingsToAdd
            .push(furnnine)

        const baththree = new Room({room_name: 'Bathroom'})
        const furnten = new Furnishing({
            furniture_url: "https://www.wayfair.com/",
            furniture_img: "",
            light_url: "https://www.wayfair.com/",
            light_img: "",
            rug_url: "https://www.wayfair.com/",
            rug_img: "https://i.imgur.com/t0AA3GA.png?1"
        })

        baththree
            .furnishingsToAdd
            .push(furnten)

        const livingthree = new Room({room_name: 'Living Room'})
        const furneleven = new Furnishing({
            furniture_url: "https://www.wayfair.com/",
            furniture_img: "https://i.imgur.com/5hq2Mo2.png?1",
            light_url: "https://www.wayfair.com/",
            light_img: "",
            rug_url: "https://www.wayfair.com/",
            rug_img: ""
        })

        livingthree
            .furnishingsToAdd
            .push(furneleven)

        const kitchenthree = new Room({room_name: 'Kitchen'})
        const furntwelve = new Furnishing({
            furniture_url: "https://www.wayfair.com/",
            furniture_img: "https://i.imgur.com/pLU1ST9.jpg?1",
            light_url: "https://www.wayfair.com/",
            light_img: "",
            rug_url: "https://www.wayfair.com/",
            rug_img: ""
        })

        kitchenthree
            .furnishingsToAdd
            .push(furntwelve)

        okhunlee
            .rooms
            .push(bedthree, baththree, livingthree, kitchenthree)

        return okhunlee.save()

    })
    .then(() => {
        const driffel = new User({ username: 'DRiff', name: 'Diana Riffel', email: 'driffel@gmail.com', photo_url: 'https://i.imgur.com/yP98Z3B.png'})

        const bedfour = new Room({room_name: 'Bedroom'})
        const furnthirteen = new Furnishing({
            furniture_url: "https://www.wayfair.com/",
            furniture_img: "",
            light_url: "https://www.wayfair.com/",
            light_img: "",
            rug_url: "https://www.wayfair.com/",
            rug_img: "https://i.imgur.com/71NadJP.jpg?1"
        })

        bedfour
            .furnishingsToAdd
            .push(furnthirteen)

        const bathfour = new Room({room_name: 'Bathroom'})
        const furnfourteen = new Furnishing({
            furniture_url: "https://www.wayfair.com/",
            furniture_img: "",
            light_url: "https://www.wayfair.com/",
            light_img: "",
            rug_url: "https://www.wayfair.com/",
            rug_img: ""
        })

        bathfour
            .furnishingsToAdd
            .push(furnfourteen)

        const livingfour = new Room({room_name: 'Living Room'})
        const furnfifteen = new Furnishing({
            furniture_url: "https://www.wayfair.com/",
            furniture_img: "",
            light_url: "https://www.wayfair.com/",
            light_img: "",
            rug_url: "https://www.wayfair.com/",
            rug_img: "https://i.imgur.com/t0AA3GA.png?1"
        })

        livingfour
            .furnishingsToAdd
            .push(furnfifteen)

        const kitchenfour = new Room({room_name: 'Kitchen'})
        const furnsixteen = new Furnishing({
            furniture_url: "https://www.wayfair.com/",
            furniture_img: "https://i.imgur.com/pLU1ST9.jpg?1",
            light_url: "https://www.wayfair.com/",
            light_img: "",
            rug_url: "https://www.wayfair.com/",
            rug_img: ""
        })

        kitchenfour
            .furnishingsToAdd
            .push(furnsixteen)

        driffel
            .rooms
            .push(bedfour, bathfour, livingfour, kitchenfour)

        return driffel
            .save()
            .catch((error) => {
                console.log('Error saving seeded data!')
                console.log(error)
            })
    })
    .then(() => {
        mongoose
            .connection
            .close()
        console.log(`Finished seeding database...
    Disconnected from MongoDB
    `)
    })
