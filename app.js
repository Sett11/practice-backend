const fs = require('fs')
const path = require('path')

const pathToFile = path.join('newFolder', 'b.js')
const stream = fs.createReadStream(pathToFile)

stream.pipe(process.stdout)


