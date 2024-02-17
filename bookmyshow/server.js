const express = require('express');
const app = express();
const mongoose = require('mongoose');
const multer = require('multer');
const dotenv = require('dotenv');
const path = require('path');
const error = require('mongoose/lib/error');
dotenv.config();
let port = process.env.PORT;

app.use(express.static(__dirname + "/bookclient"));
app.use(express.static(path.join(__dirname, 'image')));
app.use('/images',express.static(path.join(__dirname, 'images')));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

let schema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
    },
    actor : {
        type : String,
        required : true,
        
    },
    director : {
        type : String,
        required : true,
    },
});

const model = mongoose.model("film",schema);

const storage = multer.memoryStorage();
const upload = multer({storage: storage});

app.get('/test',(req,res)=>{
    res.status(200).send("Test success");
});

app.post('/submit',async(req,res)=>{
    let data = req.body;
    console.log("data: ",data);

    const isUserExist = await model.findOne({title:data.title});
    console.log("isUserExist: ",isUserExist);

    if(isUserExist){
        res.status(400).send("user already exists");
        return;
    }

    const result = await model.insertOne({
        title: req.body.title,
        actor: req.body.actor,
        director:req.body.director,
        image: req.file.buffer.toString('base64')
    })

    
    .then((message)=>{
        console.log("Document inserted successfully");
        res.status(201).send("success");
    })
    .catch((error)=>{
        console.log("Document insertion failed");
        res.status(400).send("failed");
    })

});

app.get('/getFilms',async(req,res)=>{
    const datas = await model.find();
    res.status(201).send("success");
   });

 async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/ums');
        console.log("Database connection established");
    } catch (error){
        console.log("Database not connected: ",error);
    }finally{
        app.listen(port,()=>{
            console.log(`server running at http://localhost:${port}`);
        });
    }
 }

 connect();







