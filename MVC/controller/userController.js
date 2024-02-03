const users = require('../db/models/users');
const mongoose =require('mongoose');
const bcrypt = require('bcryptjs');
const success_function = require('../utils/response-handler').success_function;
const error_function = require('../utils/response-handler').error_function;

 exports.createUser = async function(req,res) {
    try{
        // const datas = req.body;
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;
        //validate
        const isUserExist = await users.findOne({email});
        console.log("isUserExist: ",isUserExist);

        if(isUserExist) {
            let response = error_function({
                statusCode : 400,
                message : "User already exist",
            });
            res.status(response.statusCode).send(response);
        }

         //hashing 

         let salt = await bcrypt.genSalt(10);
         console.log("salt: ",salt);

         let hashed_password = bcrypt.hashSync(password,salt);
         console.log("hashed_password: ",hashed_password);

        const new_user = await users.create({
            name,
            email,
            password: hashed_password,
        });

        let response_obj = {
            name,
            email
        }

        if(new_user){
            let response = success_function({
                statusCode : 201,
                data : new_user,
                message : "User created successfully",
            })
            res.status(response.statusCode).send(response);
            return;
        } else{
            let response = error_function({
                statusCode : 400,
                message : "User creation failed",
            })
            res.status(response.statusCode).send(response);
            return;
        }
    } catch(error){
        console.log("error: ",error);
        let response = error_function({
            statusCode : 400,
            message : error.message?error.message:error,
        })
        res.status(response.statusCode).send(response);
        return;
    }
}

  exports.geUserData= async function (req,res){
   try{
    const userList = await users.find();

    if (userList.length>0){
        res.status(200).send(userList);
    }else{
        res.status(404).send("No users found");
    }
   } catch(error) {
    console.log("Error fetching users: ",error);
    res.status(500).send("Data not found");
   }
}

 
async function updateUser(){

}
async function deleteUser(){

}

