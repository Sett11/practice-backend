
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
const readFileAsync = async (path)=>{
  return new Promise((res, rej)=> fs.readFile(path, {encoding: 'utf-8'}, (err, data)=>{
    if(err) rej(err.message)
    res(data)
  }))
}
const rmFileAsync = async (path)=>{
  return new Promise((res, rej)=> fs.rm(path, {encoding: 'utf-8'}, (err)=>{
    if(err) rej(err.message)
    res()
  }))
}

writeFileAsync(path.resolve(__dirname, 'text.txt'), 'data')
.then(appendFileAsync(path.resolve(__dirname, 'text.txt'), '123'))
.then(appendFileAsync(path.resolve(__dirname, 'text.txt'), '456'))
.then(appendFileAsync(path.resolve(__dirname, 'text.txt'), '789'))
.then(readFileAsync(path.resolve(__dirname, 'text.txt')))
.then(data => console.log(data))
//.then(rmFileAsync(path.resolve(__dirname, 'text.txt')))
.catch(err => console.log(err))