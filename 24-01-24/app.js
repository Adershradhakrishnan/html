const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');
dotenv.config();

app.use(express.static(__dirname + "../../client"));
app.use(express.json());

app.get('/test',(req,res)=> {

});

app.post('/submit',(req,res) =>{
    const body = req.body;
    console.log("body: ",body);

    const folderpath = './datas';
    const fileName = 'datas.json';
    const filePath = path.join(folderpath,fileName);

    if(!fs.existsSync(folderpath)) {
        fs.mkdirSync(folderpath,{recursive: true});
    }

    let fileContent = fs.readFileSync(filePath, "utf-8");
    console.log("fileContent: ",fileContent);

    let dataArr = [];

    if(fileContent === "") {
        dataArr.push(body);
        let json_data = JSON.stringify(dataArr);

        fs.writeFile(filePath,json_data, (err) => {
            if(err) {
                res.status(400).send("failed");
            } else {
                res.status(201).send("success");
            }
        });




    }else{
        let parsedFileContent = JSON.parse(fileContent);
        parsedFileContent.push(body);

        let json_data = JSON.stringify(parsedFileContent);
        fs.writeFile(filePath,json_data,(err)=> {
            if(err) {
                res.status(400).send("failed");
            }else {
                res.status(201).send("success");
            }
        });
    }

})

app.get('/getData',(req,res)=> {
    const folderpath = './datas';
    const fileName = 'datas.json';
    const filePath = path.join(folderpath,fileName);

    if (!fs.existsSync(filePath)) {
        res.status(400).send('Data not found');

    }else {
        const fileContent = fs.readFileSync(filePath, "utf-8");
        const dataArr = JSON.parse(fileContent);

        res.status(200).send(dataArr);
    }
})

app.put('/editData',(req,res)=>{
    const editData = req.body;

    const folderpath = './datas';
    const fileName = 'datas.json';
    const filePath = path.join(folderpath,fileName);

    if (!fs.existsSync(folderpath)) {
        fs.mkdirSync(folderpath, { recursive: true });
    }

    let fileContent = fs.readFileSync(filePath, 'utf-8');
    let dataArr = [];

})

app.listen(process.env.PORT,()=>{
    console.log(`server started at http://localhost:${process.env.PORT}`);
});



