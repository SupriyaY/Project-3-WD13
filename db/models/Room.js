const mongoose = require('mongoose')
const Schema = require('../schema')

const Room = mongoose.model('Room', Schema.RoomSchema)

module.exports = Room