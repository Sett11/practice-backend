const fs = require('fs')

const wr = fs.createWriteStream('./buffer.js')

wr.cork()

wr.write('1\n')
wr.write('2\n')
wr.write('3\n')
wr.write('4\n')

wr.uncork()