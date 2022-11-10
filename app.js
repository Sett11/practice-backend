const express = require('express')
const fs = require('fs')
// fs.mkdir('public', (err)=>{
//     err?console.error(err):null
// })
// fs.open('public/about.html', 'as', (err)=>{
//     err?console.error(err):null
// })
fs.writeFile('public/about.html', `<!DOCTYPE html>
<html>
<head>
    <title>О сайте</title>
    <meta charset="utf-8" />
</head>
<body>
    <h1>О сайте</h1>
</body>
<html>`, (err)=>{
    err?console.error(err):null
})
const app = express()
app.use('/static', express.static(__dirname + '/public'))
app.use('./', (req, res)=>{
    res.send('<h1>Main page</h1>')
})
app.listen(3000)