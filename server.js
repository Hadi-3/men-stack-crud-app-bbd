const express = require('express')
const app = express()
const path = require('path')

// MIDDLEWARE
app.use(express.static(path.join(__dirname, "public")));

app.listen(3000, () => {
    console.log('Listenig on port 3000')
})

app.get('/', (req, res)=>{
res.render('index.ejs')
})