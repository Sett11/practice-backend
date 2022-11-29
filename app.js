const Emitter = require('events')
const emitter = new Emitter()

emitter.on('message', (data, second, third)=>{
  console.log('One argument' + ' ' + data)
  console.log('Two argument'+ ' ' + second)
})

const MESSAGE = process.env.message || ''

if(MESSAGE){
  emitter.emit('message', MESSAGE, 123)
} else{
  emitter.emit('message', 'Empty message')
}