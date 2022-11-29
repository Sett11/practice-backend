
const fs = require('fs')
const path = require('path')


const writeFileAsync = (path, data)=>{
  return new Promise((res, rej)=> fs.writeFile(path, data, (err)=>{
    if(err) rej(err.message)
    res()
  }))
}
const appendFileAsync = (path, data)=>{
  return new Promise((res, rej)=> fs.appendFile(path, data, (err)=>{
    if(err) rej(err.message)
    res()
  }))
}

writeFileAsync(path.resolve(__dirname, 'text.txt'), 'data')
.then(appendFileAsync(path.resolve(__dirname, 'text.txt'), '123'))
.then(appendFileAsync(path.resolve(__dirname, 'text.txt'), '456'))
.then(appendFileAsync(path.resolve(__dirname, 'text.txt'), '789'))
.catch(err=> console.log(err))