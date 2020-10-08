const axios = require('axios')
const Dev = require('../models/Dev')

module.exports = {
    async store(req, res){
        const {devId} = req.params
        const {user} = req.headers

        const loggedDev = await Dev.findById(user)
        const targetDev = await Dev.findById(devId)

        
        if(targetDev.dislikes.includes(loggedDev._id)){
            console.log('Deu match')
        }
        
        loggedDev.dislikes.push(targetDev._id)
        
        await loggedDev.save()
        
        res.send(loggedDev)
    }
}