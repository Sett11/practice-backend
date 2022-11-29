const fs = require('fs')
const path = require('path')

console.log('Start')

 fs.mkdir(path.resolve(__dirname, 'dir'), (err)=>{
  if(err) console.error(err)
  console.log('Folder create')
 })

 console.log('End')