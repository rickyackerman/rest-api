require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()

const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 5000
const corsOptions = {
    origin: '*',
    methods: 'GET,POST,PUT,PATCH,DELETE,HEAD,OPTIONS',
    headers: 'Content-Type'
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.listen(port, host, () => console.log(`server running on http://${host}:${port}`))

