const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const fs=require('fs');
const path =require('path');

const error = require('mongoose/lib/error');
const { String } = require('mongoose/lib/error/messages');
dotenv.config();
let port = process.env.PORT;

app.use(express.static(__dirname + "../../client"));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//schema
let schema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
        unique : true,
    },
    password : {
        type : String,
        required : true,
    },
    image: {
         type:String,
         required:true,    
    }
});

//compiling schema to model

const model = mongoose.model("users",schema);

//test api
app.get('/test',(req,res)=>{
    res.status(200).send("Test success");
});

// app.post('/submit',async(req,res)=>{
//     let datas = req.body;
//     console.log("datas: ",datas);

//     //save to database

//     await model.create(datas)
//     .then((message)=>{
//         console.log("Document inserted successfully");
//         res.status(201).send("success");
//     })
//     .catch((error)=>{
//         console.log("Document insertion failed");
//         res.status(400).send("failed");
//     })

// });
   app.post('/submit',async(req,res)=>{
    let {name,email,password,base64Image} = req.body;
    //check if all required fields are present
    if(!name||!email||!password||!base64Image){
        return res.status(400).send("All fields are required");
    }
    //check if the user already exists
    const isUserExist = await model.findOne({email:email});
    if(isUserExist){
        return res.status(400).send("user already exists");
    }

     const Image = base64Image.split(';base64,').pop();
     const binaryImage = Buffer.from(Image, 'base64');
    //save the image to the server's file system

    const uploadDir = path.join(__dirname,'uploads');
    if(!fs.existsSync(uploadDir)){
        fs.mkdirSync(uploadDir);
    }
//     //convert base64 string to buffer 
    const imageBuffer = Buffer.from(base64Image,'base64');

//     //generate a unique filename (you may use a different approach)
    const fileName = `${Date.now()}.png`;

//     //write buffer to file
    const filePath = path.join(uploadDir,fileName);
    fs.writeFileSync(filePath,imageBuffer);

//     //save userdata(including image path)to mongodb
   try{
        await model.create({
             name:name,
            email:email,
            password:password,
            image:filePath //save the file path to the image in the database
       });
        console.log("Document inserted successfully");
        res.status(201).send("Success");
   }catch (error) {
        console.error("Document insertion failed:",error);
       res.status(400).send("Failed to insert document");
    }
    })
   
   

   
   

   app.get('/getData',async(req,res)=>{
    const datas = await model.find();
    res.status(201).send("success");
   });

 async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/ums');
        console.log("Dataabase connection established");
    } catch (error){
        console.log("Database not connected: ",error);
    }finally{
        app.listen(port,()=>{
            console.log(`server running at http://localhost:${port}`);
        });
    }
 }

 connect();