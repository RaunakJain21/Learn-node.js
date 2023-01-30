// node js is async language

// const app= require('./app')
// const arr=[2,4,7,1,3,,8,3];
// console.log(app.z())

// core modules
// to create a file
// const a = require('fs');
// a.writeFileSync("hell.txt","code step by step")

// Create srever
// const http = require('http');

// function dataControl(req,resp)
// {
//     resp.write("<h1>Hello this is raunak kjain</h1>");
// }
// http.createServer(dataControl).listen(4500);

// console.log("heelll nj jngfraunako");

// // simple and basic api
// const http = require('http');
// const data= require('./data');
// http.createServer((req,resp)=>{
//     resp.writeHead(500,{'Content-Type':'application\json'});
//     resp.write(JSON.stringify(data));
//     resp.end();
// }).listen(4200);

// // getting input bfrom command line
// const fs =require('fs');
// const input = process.argv;
// fs.writeFileSync(input[2],input[3])
// // writefileSync(filename,data)
// // node .\index.js hey.txt 'hiii'                    cmd

// to add or remove a file
// const fs = require('fs');
// const input = process.argv;
// if(input[2]=="add")
// {
//     fs.writeFileSync(input[3],input[4])
// }
// else if(input[2]=="remove")
// {
//     fs.unlinkSync(input[3])
// }
// else{
//     console.log("invalid input");
// }

//  

// const path = require('path');
// const dirpath = path.join(__dirname,'files');
// console.log(directrypath);
// const fs = require('fs');
// for(i=0;i<50;i++)
// {
//     //   fs.unlinkSync(dirpath+"/hello"+i+".txt","this is raunak");
//     // fs.unlinkSync(`fileshello${i}.txt`,"this is raunak");
// }

// Read file
const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'files');
fs.readdir(dirPath,(err,files)=>{
    files.forEach((item)=>{
        console.log("file name is",item);
    })
})

