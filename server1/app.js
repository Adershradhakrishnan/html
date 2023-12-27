const http = require('http');
const url = require('url');
const port = 3000;
const fs = require('fs');


const server = http.createServer((req,res) => {
    console.log("url: ",req.url);
    const parsed_url = url.parse(req.url);
    console.log("parsed_url: ",parsed_url);

    if(parsed_url.pathname === '/') {
      res.writeHead(200,{'Content-Type' : 'text/html'});
      res.end(fs.readFileSync('../client/index.html'));
    }

    if(req.method === "POST" && parsed_url.pathname === "/submit");
    console.log("form submitted succesfully..");

    res.writeHead(200,{'Content-Type' : 'text/plain'});
    res.end("Form submitted succesfully");

});

  server.listen(port,()=> {
    console.log(`Server running at http://127.0.0.1:${port}`)
  });