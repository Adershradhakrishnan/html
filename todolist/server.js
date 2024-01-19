const express =require('express');
const app = express();
let {MongoClient,ObjectId} = require('mongodb');
let dotenv = require('dotenv');
dotenv.config();
 let port = process.env.PORT;

 const client = new MongoClient('mongodb://localhost:27017');
 const db = client.db('todo');
 const collection = db.collection('users');

 