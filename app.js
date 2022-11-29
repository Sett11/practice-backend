const fs = require('fs')
const path = require('path')

 fs.mkdirSync(path.resolve(__dirname, 'dir', 'dir1', 'dir2'), {recursive: true})
