console.log("Hello world!");

var slugify = require('slugify')

let a = slugify('some string') // some-string
console.log(a)

// if you prefer something other than '-' as separator
const b = slugify('some ratfeywge$%4564&&&Akash', '_')  // some_string
console.log(b)