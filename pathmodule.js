const path = require('path');
// console.log(path.dirname("D:/node-tut/pathmodule.js"));


// console.log(path.extname("D:/node-tut/pathmodule.js"));

// console.log(path.basename("D:/node-tut/pathmodule.js"));
// console.log(path.parse("D:/node-tut/pathmodule.js"));   

// we can also create a object from parsse and use each element individually
const Mypath = path.parse("D:/node-tut/pathmodule.js");
console.log(Mypath.name);