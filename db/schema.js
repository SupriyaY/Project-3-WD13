const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.Promise = global.Promise

const FurnishingSchema = new Schema({
    furniture_rec: {
        type: String,
        required: [true, 'Furniture is required!']
    },

    furniture_img: {
        type: String
    },
    rug_rec: {
        type: String,
        required: [true, 'Rug is required!']

    },
    rug_img: {
        type: String
    },
    light_rec: {
        type: String,
        required: [true, 'Rug is required!']
    },
    light_img: String
}, {timestamps: {}})

const RoomSchema = new Schema({

    room_type: {
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
    first_name: {
        type: String,
        required: [true, 'Name is required!']
    },
    last_name: {
        type: String,
        required: [true, 'Name is required!']
    },
    email: {
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