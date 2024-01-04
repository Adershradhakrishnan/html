const http = require('http');
const url = require('url');
const port = 3000;
const fs = require('fs');
const queryString = require('querystring');
const {MongoClient}=require('mongodb');

const client = new MongoClient("mongodb://127.0.0.1:27017");


const server = http.createServer((req,res) => {

  //access the database and collections
  const db=client.db("users");
  const collection=db.collection("users_coll");

    console.log("url: ",req.url);


    //parse the request url
    const parsed_url = url.parse(req.url);
    console.log("parsed_url: ",parsed_url);


    //serve the html file on root request

    if(parsed_url.pathname === '/') {
      res.writeHead(200,{'Content-Type' : 'text/html'});
      res.end(fs.readFileSync('../client/index.html'));
    }


    //handle form submission on post request to/submit

    if(req.method === "POST" && parsed_url.pathname === "/submit") {
    console.log("form submitted succesfully..");
    };


    let body='';

    //collect data as it comes in chunks

    req.on('data',(chunk)=> {
      console.log("chunk: ",chunk);
      console.log('chunk.toString() :',chunk.toString());
      body+=chunk.toString();
      console.log("body: ",body);
    });

    //process the form data on end of the request
    req.on('end',async()=> {
      const formData = queryString.parse(body);
      console.log("formData: ",formData);

      //do something with the submitted data
      console.log("name: ",formData.name);
      console.log("email: ",formData.email);
      console.log("password: ",formData.password);

      //save to database
      collection.insertOne

    });
    
      //save to a database(next)

    //res.writeHead(200,{'Content-Type' : 'text/plain'});
     //res.end("Form submitted succesfully");

});

  server.listen(port,()=> {
    console.log(`Server running at http://127.0.0.1:${port}`)
  });


