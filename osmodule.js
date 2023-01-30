const os = require('os');
console.log(os.arch());

const freememory = os.freemem();
// console.log(freememory); // in bytes
console.log(`${freememory/1024/1024/1024}`);

const totalmemory = os.totalmem();
console.log(`${totalmemory/1024/1024/1024}`);

console.log(os.hostname()); 
console.log(os.platform()); // window linux android
console.log(os.tmpdir());
console.log(os.type());
// https://nodejs.org/api/os.html