const fs = require('fs')
const path = require('path')

fs.writeFile(path.resolve(__dirname, 'text.txt'), 'Fack', (err)=>{
  if(err){
    throw new Error
  }
})