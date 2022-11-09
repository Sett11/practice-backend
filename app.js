const fs = require('fs')
fs.mkdir('welcome', (err)=>{
    if(err) throw err 
})
fs.open('welcome/index.js', 'as', (err)=>{
    if(err) throw err
})
fs.open('welcome/morning.js', 'as', (err)=>{
    if(err) throw err
})
fs.open('welcome/evening.js', 'as', (err)=>{
    if(err) throw err
})

fs.writeFile('welcome/morning.js', `module.exports = 'Goot morning!'`, (err)=>{
    if(err) throw err
})
fs.writeFile('welcome/evening.js', `module.exports = 'Goot evening!'`, (err)=>{
    if(err) throw err
})
fs.writeFile('welcome/index.js', `
const morning = require('./morning')
const evening = require('./evening')
module.exports = {
    getMorningMessage = ()=> console.log(morning)
    getEveningMessage = ()=> console.log(evening)
}`, (err)=>{
    if(err) throw err
})