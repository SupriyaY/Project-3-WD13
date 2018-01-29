const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.Promise = global.Promise

const FurnishingSchema = new Schema({
    furniture_url: {
        type: String,
        required: [true, 'Furniture is required!']
    },

    furniture_img: {
        type: String
    },
    rug_url: {
        type: String,
        required: [true, 'Rug is required!']

    },
    rug_img: {
        type: String
    },
    light_url: {
        type: String,
        required: [true, 'Light is required!']
    },
    light_img: String
}, {timestamps: {}})

const RoomSchema = new Schema({

    room_name: {
        type: String,
        required: [true, 'Room type is required!']

    },
    furnishingsToAdd: [FurnishingSchema]

}, {timestamps: {}})

const UserSchema = new Schema({
    username: {
        type: String,
        required: true['Username is required!']
    },
        name: {
        type: String,
        required: [true, 'Name is required!']
    },
    email: {
        type: String
    },
    photo_url: {
    type: String
},

    rooms: [RoomSchema]
}, {
    timestamps: {},
    usePushEach: true

})
module.exports = {
    UserSchema,
    RoomSchema,
    FurnishingSchema
}