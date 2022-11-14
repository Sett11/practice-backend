const fs = require('fs')
const path = require('path')
const folder = path.join( __dirname, 'newFolder')

fs.readdir(folder, (err, data)=>{
    if(err){
        throw Error
    }
    data.forEach((file)=>{
        const pathToFile = path.join(folder, `${file}`)
        fs.stat(pathToFile, (err, stats)=>{
            if(err){
                throw Error
            }
            else{
                if(stats.isFile()){
                    const ext = path.extname()
                    console.log(path.basename(pathToFile, ext) + '-' + ext.slice(1, ext.length) + '-' + stats.size + 'b')
                }
            }
        })
    })
})