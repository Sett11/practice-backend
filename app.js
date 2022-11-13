const fs = require('fs')
const path = require('path')
const readline = require('readline')

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let pathToFile = fs.createWriteStream(path.join('newFolder', 'b.js'))

readline.emitKeypressEvents(process.stdin)
process.stdin.on('keypress', (ch, key)=>{
    if(key && key.ctrl && key.name == 'c'){
        console.log('\n Пока! Вы пожелали выйти и остановить запись!')
    }
})

function write(){
    r1.question( 'Что-нибудь напишите!', (text)=>{
        console.log(text)
        if(text.toLocaleLowerCase()=== 'exit'){
            console.log('\n Пока! Вы пожелали выйти и остановить запись!')
            r1.close()
            return
        }
        pathToFile.write(text + '\n', err=>{
            if(err){
                console.log(err.message)
            }
            else{
                write()
            }
        })
    })
}
write()