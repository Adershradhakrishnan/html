const express = require('express');
const app = express();
let {MongoClient,ObjectId} = require('mongodb');
let dotenv = require('dotenv');
dotenv.config();
 let port = process.env.PORT;

 const client = new MongoClient('mongodb://localhost:27017');
 const db = client.db('ums');
 const collection = db.collection('users');

 //test route

 app.get('/test',(req,res,next)=>{
    // res.status(200).send("Success");
    next();
 }, (req,res,next) => {
    // console.log("success1");
    // res.status(200).send("success1");
    next();
 }, (req,res) => {
    console.log("success2");
    res.status(200).send("success2");
 }
 );

 console.log("__dirname : ",__dirname);
 app.use('/',express.static(__dirname + "/client"));
 app.use(express.urlencoded({extended: false})); //to parse form datas
 app.use(express.json()); //to parse json data
 app.use(express.text());

 app.post('/submit',async(req,res)=>{
    let data = req.body;
    console.log("data:",data);

    await collection.insertOne(data)
    .then((message)=>{
        console.log("Document inserted successfully");
        res.status(201).send("success");
    })
    .catch((error)=>{
        console.log("Document insertion failed:",error);
    })
 })

 app.get('/getData',async (req,res) => {
    let data = await collection.find().toArray();
    console.log("data: ",data);

    let json_data = JSON.stringify(data);
    console.log("json_data: ",json_data);

    res.status(200).send(json_data);
 });

 app.put('/editData',async(req,res)=> {
    let data = req.body;
    console.log("data: ",data);

    let id = data.id;
    console.log("id: ",id);
    console.log("typeof(id): ",typeof(id));
    let _id = new ObjectId(id);
    console.log("_id: ",_id);
    console.log("typeof(_id): ",typeof(_id));

    let updateDates = {
      name : data.name,
      email : data.email,
      password : data.password,
    }
    await collection.updateOne({_id},{$set : updateDates})
    .then((message)=>{
      console.log("Document updated successfull:",message);
      res.status(200).send("success")
    })
    .catch((error)=>{
      console.log("Document not updated: ",error);
      res.status(400).send("failed");
    })
 });

 app.delete('/deleteData',async(req,res)=>{
   let data = req.body;
   console.log("data: ",data);

   let id = data;
   console.log("id: ",id);

   let _id = new ObjectId(id);
   console.log("_id: ",_id);

   await collection.deleteOne({_id})
   .then((message)=>{
      console.log("Deletion successfull");
      res.status(200).send("success")
    })
    .catch((error)=>{
      console.log("Deletion failed");
      res.status(400).send("failed");
    })
 });
   

   async function connect(){
      await client.connect()
      .then((message)=>{
         console.log("database connection established",message);
      })
      .catch((error)=>{
         console.log("Database connection error: ",error);
      })
      .finally(()=>{
         app.listen(port,()=>{
            console.log(`server started at http://localhost:${port}`);
        })
      });
   }

   connect();

 