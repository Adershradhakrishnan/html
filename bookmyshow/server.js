const express = require('express');
const app = express();
const mongoose = require('mongoose');
// const multer = require('multer');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const error = require('mongoose/lib/error');
dotenv.config();
let port = process.env.PORT;

app.use(express.static(__dirname + "/bookclient"));
app.use('/images',express.static(path.join(__dirname, 'images')));
app.use('/uploads',express.static(path.join(__dirname, 'uploads')));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.text());
app.use(cors());

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
    image: {
        type : String,
        required : true,
    }
});

const model = mongoose.model("film",schema);


app.post('/submit',async(req,res)=>{
    let {title,actor,director,base64Image} = req.body;

    if(!title || !actor || !director || !base64Image) {
        return res.status(400).send("All fields are required");
    }
    

    const isUserExist = await model.findOne({title:title});
    console.log("isUserExist: ",isUserExist);

    if(isUserExist){
       return res.status(400).send("user already exists");
        
    }

    const Image = base64Image.split(';base64').pop();
    const binaryImage = Buffer.from(Image,'base64');

    const uploadDir = path.join(__dirname,'/uploads');
    if(!fs.existsSync(uploadDir)){
        fs.mkdirSync(uploadDir);
    }

    const fileName = `${Date.now()}.png`;

    const relativePath = `/uploads/${fileName}`;

    const filePath = path.join(uploadDir,fileName);
    fs.writeFileSync(filePath,binaryImage);

    try{
        await model.create({
            title:title,
            actor:actor,
            director:director,
            image: relativePath
        });
        console.log("Document inserted successfully");
        res.status(201).send("success");
    }  catch (error){
        console.log("Document insertion failed: ",error);
        res.status(400).send("Failed to insert document");
    }

   

});

app.get('/getFilms',async(req,res)=>{
    try{
        const movies = await model.find();
        res.status(200).json(movies);
    }catch (error) {
        console.log('Error fetching movies:',error);
    }
   
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







