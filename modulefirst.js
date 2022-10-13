// function simple1st(){
//     console.log("this is module first")
// }

// const imp = require("./modulesecond")

// simple1st()
// imp();

// NOW WE WILL CALL A ES6 MODULE

// import simple23 from './modulethird.mjs';

// simple();
// simple23();

// importing all the modules from a file

import * as all from "./modulethird.mjs";

console.log(all.simple());
console.log(all.simple2())