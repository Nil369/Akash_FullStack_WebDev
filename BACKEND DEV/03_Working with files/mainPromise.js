import fs from "fs/promises"

let a = await fs.readFile("Akash.txt")

let b = await fs.appendFile("Akash.txt", "\n\n\n\nthis is amazing promise")
console.log(a.toString(), b)