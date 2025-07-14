const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const path = require('path')

// DATABASE CONNECTION
mongoose.connect(process.env.MONGODB_URI)
mongoose.connection.on('connected', () =>{
    console.log(`Connected to MongoDB ${mongoose.connection.name}`)
})

// MIDDLEWARE
app.use(express.static(path.join(__dirname, "public")));

// GET / (home)
app.get('/', (req, res)=>{
res.render('index.ejs')
})

app.listen(3000, () => {
    console.log('Listenig on port 3000')
})