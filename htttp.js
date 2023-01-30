// Create srever
const http = require('http');

function dataControl(req,resp)
{
    // resp.write("<h1>Hello this is raunak jain</h1>");

    if(req.url==="/")
    resp.end("Hello this is home page");
    else if(req.url==="/contact")
    resp.end("Hello this is contact page");
    else{
        resp.writeHead(404, {"Content-type":"text/html"});
        resp.end("Error 404 page not found");
    }
}
http.createServer(dataControl).listen(4500,"127.0.0.1");

console.log("heelll nj jngfraunako");