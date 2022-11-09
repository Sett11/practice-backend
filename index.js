class User{
    constructor(name, age){
        this.name = name
        this.age = age
    }
    displayInfo = ()=>{
        console.log(`${this.name}, ${this.age}`)
    }
    sayHi = ()=>{
        console.log(`Hi! i'm ${this.name}`)
    }
}
module.exports = User
const fs = require('fs')
fs.writeFile('./app.js', `const User = require('./index.js')
const vasia = new User('Vasia', 38)
vasia.sayHi()`, (err)=>{
    err?console.error(err):null
})