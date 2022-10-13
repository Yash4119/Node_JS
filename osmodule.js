const { networkInterfaces, platform } = require('node:os');
const os = require('node:os');

console.log(os.freemem())
console.log(os.homedir())
// console.log(networkInterfaces())
console.log(os.platform())
console.log(os.release())
console.log(os.tmpdir())
console.log(os.uptime())
console.log(os.type())