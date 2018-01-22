const mongoose = require('mongoose')
const Schema = require('../schema')

const Room = mongoose.model('City', Schema.RoomSchema)

module.exports = Room