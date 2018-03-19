const express = require('express')
const axios = require('axios')
const router = express.Router()


router.get('/', async (request,response)=>{
    console.log('hit the google route')
    axios.get(`https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_KEY}&cx=017576662512468239146:omuauf_lfve&q=lectures

    `).then(response =>{
        return response.data
    }).then((search)=>{
        response.json(search)
    })
} )

module.exports = router