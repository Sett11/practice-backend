const fs = require('fs')
const path = require('path')
const file = path.join('b.js')
const stream = fs.ReadStream(file, {encoding: 'utf-8'})
stream.on('readable', ()=>{
    let data = stream.read()
    if(data!==null){
        console.log(data)
    }
})
stream.on('end', (err)=>{
   
})
