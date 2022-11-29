const fs = require('fs')
const path = require('path')

console.log('Start')

 fs.rmdir(path.resolve(__dirname, 'dir'), (err)=>{
  if(err) console.error(err)
  console.log('Folder delete')
 })

 console.log('End')