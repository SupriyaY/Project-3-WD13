const mongoose = require('mongoose')
const Schema = require('../schema')


const Furnishing = mongoose.model('Activity', Schema.FurnishingSchema)

module.exports = Furnishing