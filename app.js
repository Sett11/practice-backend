const { query } = require('express')
const express = require('express')

const app = express()
const jsonParser = express.json()
app.post('/user', jsonParser, (req, res)=>{
    if(!req.body) return res.sendStatus(400)
    res.json(req.body)
})
app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/public/index.html')
})

app.listen(3000, ()=>console.log('server is job'))