const biodata ={
    name: "Raunak",
    age: 20,
    branch: "CS"
};
// const jsondata = JSON.stringify(biodata);
// {"name":"Raunak","age":20,"branch":"CS"}
// console.log(jsondata.name);// it give undefined
// console.log(jsondata);

// const objdata = JSON.parse(jsondata);
// console.log(objdata);
// { name: 'Raunak', age: 20, branch: 'CS' }


// 1 convert to json
//  2 dusre file me add krna
// readfile
// 4 again convert back to js obj ori
// 5 console.log

const jsondata = JSON.stringify(biodata);
const fs = require('fs');
fs.writeFile("json.json",jsondata, (err)=>{
    console.log("done");
});

fs.readFile("json.json","utf-8",(err,data)=>{
    console.log(data);
    const orgdata = JSON.parse(jsondata);
    console.log(orgdata);
});