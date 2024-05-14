// const fs = require("fs")
// const fs = require("fs/promises")
import fs from 'fs'
import fsP from 'fs/promises'
 
console.log("starting")
// fs.writeFileSync("Akash.txt", "Akash is a good boy")

fs.writeFile("Akash2.txt", "Akash is a good boy2", ()=>{
    console.log("done")
    fs.readFile("Akash2.txt", (error, data)=>{
        console.log(error, data.toString())
    })
})

fs.appendFile("Akash.txt", "Akash=>Nil", (e, d)=>{
    console.log(d)
})

console.log("ending")