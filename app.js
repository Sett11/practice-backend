const http = require('http')
const port = 5000;

const server = http.createServer((req, res)=>{
  res.writeHead(200, {
    'Content-Type': 'application/json'
  })
  if(req.url==='/users'){
    return res.end(JSON.stringify([{
      id: 1,
      name: 'Vasia'
    }]))
  }
  if(req.url==='/posts'){
    return res.end('POSTS')
  }
  res.end(req.url)
})
server.listen(port, () => console.log(`Server gob on the port: ${port}`))