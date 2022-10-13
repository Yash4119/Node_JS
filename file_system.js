const fs = require('node:fs');

// fs.readFile('temp.txt','utf8',(err,data) => {
//     console.log(err)
//     console.log(data)
// })

// const n = fs.readFileSync("temp.txt")

// console.log(n);
// console.log(n.toJSON());
// console.log(n.toString());

// Now we will write some data to the file
// fs.writeFile('temp.txt',"This File is been updated", ()=> {
//     console.log("The file has been written")
// })

const t = fs.writeFileSync("temp.txt","Writing again to the file hie")



console.log("Finished reading file")