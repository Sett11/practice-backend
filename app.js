const fs = require('fs')
const path = require('path')

const text = `ahhhahahahha
100
ahhhahaha
100
ahhahahaha
`
const pathToFile = path.resolve(__dirname, 'file.txt')

fs.writeFile(pathToFile, text, (err)=>{
  if(err) throw new Error
})

let counter = 100

while(counter){
  fs.appendFile(pathToFile, text, (err)=>{
  if(err) throw new Error
})
counter--
} 