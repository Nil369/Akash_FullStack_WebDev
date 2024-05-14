// Common JS
// const { createServer } = require('node:http');
// const  fs = require('fs')

// const common = require('./mymodule2');
// console.log(common)

// (function(exports, require, module, __filename, __dirname) {

//     // Module code actually lives here
  
// });

// const a = require("./mymodule2.js")

// console.log(a, __dirname, __filename)


// To use ES6 Modules...just type => "type": "module" in  package.json
// import  http from 'http'

import {a,b,e}from './mymodule.js'
console.log(a,b,e);

import objects from './mymodule.js'
console.log(objects)