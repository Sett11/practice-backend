const fs = require('fs')
const path = require('path')
const file = path.join(__dirname, 'b.js')
const stream = fs.ReadStream(file, {encoding: 'utf-8'})
stream.on('readable', ()=>{
    let data = stream.read()
    if(data!==null){
        console.log(data)
    }
})
stream.on('end', (err)=>{
   
})
