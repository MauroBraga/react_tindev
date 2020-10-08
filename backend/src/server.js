const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes')


const server = express()

module.exports = mongoose.connect('mongodb://localhost:27017s/tindev-backend', {
     useNewUrlParser: true, useUnifiedTopology: true  
    });

server.use(cors())    
server.use(express.json())
server.use(routes)

server.listen(3333)