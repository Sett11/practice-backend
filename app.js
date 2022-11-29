const fs = require('fs')
const path = require('path')


const pathToFile = path.resolve(__dirname, 'file.txt')

const stream = fs.createReadStream(pathToFile)
stream.on('data', (chunk)=>{
  console.log(chunk)
})