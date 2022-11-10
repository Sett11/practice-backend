const express = require('express')
const fs = require('fs')
const app = express()

app.use((req, res, next)=>{
    let now = new Date()
    let hour = now.getHours()
    let minutes = now.getMinutes()
    let seconds = now.getSeconds()
    let data = `${hour}:${minutes}:${seconds} ${req.method} ${req.url} ${req.get('user-agent')}`
    console.log(data)
    fs.appendFile('server.log', data, (err)=>{
        err?console.error(err):null
    })
    next()
})

app.get('/', (req, res)=>{
    res.send('Hello')
})

app.listen(3000)