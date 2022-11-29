const os = require("os");
const cluster = require("cluster");

if (cluster.isMaster) {
  for (let i = 0; i < os.cpus().length; i++) {
    cluster.fork()
  }
  cluster.on('exit', (worker)=>{
    console.log(`Worker c id: ${worker.process.pid} is dead`)
    cluster.fork()
  })
}
else{
  console.log(`Workher ${process.pid} is gob`)
  setInterval(()=>{
    console.log(`${process.pid} is gob`)
  }, 5000)
}