import path from "path"

let myPath = "D:\\BACKEND DEV\\03_Working with files\\Akash.txt"
console.log(path.extname(myPath))

console.log(path.dirname(myPath))
console.log(path.basename(myPath))

console.log(path.join("D:/", "BACKEND DEV\\03_Working with files\\Akash.txt"))