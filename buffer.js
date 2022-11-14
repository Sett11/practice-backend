
const buffer = Buffer.from('BUFFER!')

process.stdout.write('LALALA')
process.stdout.write('\n')
process.stdout.write(buffer)
process.stdout.write('\n')

process.stdout.write('Write with callback', ()=>{
    process.stdout.write('\nCallback!', ()=>{
        process.stdout.write('\nNextCallback!', ()=>{
            process.stdout.write('\nNewNextCallback!')
        })
    })
})
