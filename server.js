const express = require('express');
const app = express();
let dotenv = require('dotenv');
dotenv.config();
 let port = process.env.PORT;

 app.get('/test',(req,res)=>{
    res.status(200).send("Success");
 });

 app.listen(port,()=>{
     console.log(`server started at http://localhost:${port}`);
 })