const crypto = require('crypto')

const start = Date.now()

crypto.pbkdf2('123123ppp', '5', 1000000, 64, 'sha512', ()=>{
  console.log('I end', Date.now() - start)
})