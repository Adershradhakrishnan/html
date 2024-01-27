const users = require('../db/models/users');
const success_function = require('../utils/response-handler').success_function;
const error_function = require('../utils/response-handler').error_function;

 exports.createUser = async function(req,res) {
    try{
        const datas = req.body;
        //validate
        const isUserExist = await users.findOne({email : datas.email});
        console.log("isUserExist: ",isUserExist);

        if(isUserExist) {
            let response = error_function({
                statusCode : 400,
                message : "User already exist",
            });
            res.status(response.statusCode).send(response);
        }
        const new_user = await users.create(datas);

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

 exports.getUserData =async function(req,res){
    try{
        cons
    }

}

async function updateUser(){

}
async function deleteUser(){

}

