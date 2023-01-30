const http = require('http');
const fs = require('fs');
function dataControl(req,resp)
{
    if(req.url==="/")
    resp.end("Hello this is home1 page");
    else if(req.url==="/contact")
    resp.end("Hello this is contact page");
    else if(req.url==="/apidata")
    {
          fs.readFile(`${__dirname}/data.json`,"utf-8",(err,data)=>{
            console.log(data);
            // resp.end(data);
            const objdata = JSON.parse(data);
            resp.end(objdata[0].name);
          });
    }
    // resp.end("Hello this is contact page");
    else{
        resp.writeHead(404, {"Content-type":"text/html"});
        resp.end("Error 404 page not found");
    }
}
http.createServer(dataControl).listen(4500,"127.0.0.1");
console.log("Hello world");