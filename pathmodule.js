const path = require('node:path');

console.log( path.dirname('E:\TE\DBMS LAB CODES'))
console.log( path.basename('E:\TE\DBMS LAB CODES'))
// console.log(process.env.PATH);
// process.env.PATH.split(path.delimiter);

console.log(path.extname(__filename))       //this tells about the extension of the current file specified by __filename