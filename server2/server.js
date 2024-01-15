const http = require('http');
const url = require('url');
const port = 3000;
const fs = require('fs');
const queryString = require('querystring');
const {MongoClient,ObjectId}=require('mongodb');

const client = new MongoClient("mongodb://127.0.0.1:27017");


const server = http.createServer(async(req,res) => {

    const db=client.db("task1");
  const collection=db.collection("users_coll");

    console.log("url: ",req.url);

    const parsed_url = url.parse(req.url);
    console.log("parsed_url: ",parsed_url);

    if(parsed_url.pathname === '/') {
        res.writeHead(200,{'Content-Type' : 'text/html'});
        res.end(fs.readFileSync('../todolist/index.html'));
      }else if(parsed_url.pathname === '/style.css'){
        res.writeHead(200,{'Content-Type' : 'text/css'});
        res.end(fs.readFileSync('../todolist/style.css'));
      }else if(parsed_url.pathname === '/add_user.html'){
        res.writeHead(200,{'Content-Type' : 'text/html'});
        res.end(fs.readFileSync('../todolist/add_user.html'));
      }else if(parsed_url.pathname === '/script.js'){
        res.writeHead(200,{'Content-Type' : 'text/javascript'});
        res.end(fs.readFileSync('../todolist/script.js'));
      }

      if(req.method === "POST" && parsed_url.pathname === "/submit") {
        console.log("form submitted succesfully..");
        
    
    
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
          
          //save to database(next)
          collection.insertOne(formData)
            .then((message)=> {
              console.log("Document saved successfully");
              console.log("message: ",message);
            })
            .catch((error)=>{
              console.log("Document not inserted");
              console.log("Database insertion error: ",error);
            })
    
            res.writeHead(200,{'Content-Type' : 'text/plain'});
         res.end("Form submitted succesfully");
    
    
        });
    } 

    if(req.method === "GET" && parsed_url.pathname === "/getData") {
      let data = await collection.find().toArray();
      console.log("data: ",data);

      let json_data = JSON.stringify(data);
      console.log("json_data: ",json_data);

      res.writeHead(200,{"content-Type" : "text/json"});
      res.end(json_data);
    }


      //handle PUT request
      if(req.method === "PUT" && parsed_url.pathname === "/editData") {
        let body = "";
        req.on('data',(chunks)=> {
          console.log("chunks: ",chunks);
          body = body + chunks.toString();
          console.log("body: ",body);
        });

        req.on('end',async ()=> {
           console.log("body: ",body);
           let data = JSON.parse(body);
           let id = data.id;
           console.log("id: ",id);
           console.log("typeof(id): ",typeof(id));
           let _id = new ObjectId(id);
           console.log("_id: ",_id);
           console.log("typeof(_id): ",typeof(_id));

           let upadateDates = {
              name : data.name,
             
           }

           await collection.updateOne({_id},{$set : upadateDates})
               .then((message)=> {
                console.log("Document updated successfully: ",message);
                res.writeHead(200,{"content-Type" : "text/plain"});
                res.end("Updated successfully");
               })
               .catch((error)=> {
                 console.log("Document not updated: ",error);
                 res.writeHead(400,{"content-Type" : "text/plain"});
                 res.end("Updation failed");
               })
        })
      }

       //handle delete request

       if(req.method === "DELETE" && parsed_url.pathname === "/deleteData") {
        console.log("Reached delete route");

        let body = "";
        req.on('data',(chunks)=> {
          console.log("chunks: ",chunks);
          body = body + chunks.toString();
          console.log("body: ",body);
        });
        req.on('end',async()=> {
          let _id = new ObjectId(body);
          await collection.deleteOne({_id})
           .then((message)=> {
            console.log("Deletion successfull");
            res.writeHead(200,{"content-Type" : "text/plain"});
            res.end("success");
           })
           .catch((error)=> {
            console.log("Deletion failed");
            res.writeHead(200,{"content-Type" : "text/plain"});
            res.end("failed");
           })
        })
      }




});


    async function connect() {

        await client.connect()
         .then((message)=> {
          console.log("database connection established");
         })
         .catch((error)=> {
          console.log("database connection error: ",error);
         })
         .finally(()=>{
      
          server.listen(port,()=> {
            console.log(`Server running at http://127.0.0.1:${port}`)
      
         });
      });
      
        
        }
      
        connect();
      









