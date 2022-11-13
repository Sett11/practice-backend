const fs = require('fs')
const path = require('path')
const file = path.join(__dirname, 'b.js')
const stream = fs.createReadStream(file, {encoding: 'utf-8'})
stream.on('readable', (err)=>{
    if(err){
        throw Error
    }
    let data = stream.read()
    if(data!==null){
        console.log(data)
    }
})
stream.on('end', (err)=>{
   if(err){
    throw Error
   }
})
