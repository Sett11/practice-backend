const fs = require('fs')
const path = require('path')


const pathToFile = path.resolve(__dirname, 'file2.txt')

const stream = fs.createWriteStream(pathToFile)

for(let i = 0; i < 100; i++){
  stream.write(i + '\n')
}
stream.end()