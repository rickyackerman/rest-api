require('dotenv').config()
const mongoose = require('mongoose')

module.exports = (async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('CONNECT TO DATABASE SUCCESS')
    } catch(err) {
        console.error('CONNECT TO DATABASE FAILED', err) 
    } 
})()
