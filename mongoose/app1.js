const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const error = require('mongoose/lib/error');
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
});

//compiling schema to model

const model = mongoose.model("users",schema);

//test api
app.get('/test',(req,res)=>{
    res.status(200).send("Test success");
});

app.post('/submit',async(req,res)=>{
    let datas = req.body;
    console.log("datas: ",datas);

    //save to database

    await model.create(datas)
    .then((message)=>{
        console.log("Document inserted successfully");
        res.status(201).send("success");
    })
    .catch((error)=>{
        console.log("Document insertion failed");
        res.status(400).send("failed");
    })

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