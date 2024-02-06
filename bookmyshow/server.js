const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const error = require('mongoose/lib/error');
dotenv.config();
let port = process.env.PORT;

app.use(express.static(__dirname + "../../bookclient"));
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

const model = mongoose.model("users",schema);

app.get('/test',(req,res)=>{
    res.status(200).send("Test success");
});

app.post('/submit',async(req,res)=>{
    let datas = req.body;
    console.log("datas: ",datas);

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







