const {Buffer} = require('buffer')
const buffer = Buffer.from('Hello!')
const buffer1 = Buffer.from(' ')
const buffer2 = Buffer.from('Hello!')
const con = Buffer.concat([buffer, buffer1, buffer2])
console.log(con.toString())
for(const chunc of buffer){
   console.log(chunc.toString())
}
