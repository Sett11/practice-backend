const fs = require('fs')

const rs = fs.createReadStream('./package-lock.json')
const ws = fs.createWriteStream('newFile.txt')

ws.on('close', ()=>{
    console.log('Writable stream has been closed!')
})
ws.on('error', (err)=>{
    console.log(`Error occured: ${err}`)
})
ws.on('finish', ()=>{
    console.log('Writable stream has been finished!')
})
ws.on('pipe', ()=>{
    console.log('Piped to Readable stream!')
})
ws.on('unpipe', ()=>{
    console.log('Unpiped to Readable stream!')
})

rs.pipe(ws)
