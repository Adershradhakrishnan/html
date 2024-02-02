// console.log("Hello world");

async function submitForm(){
    let name = document.getElementById('name').value;
    console.log("name: ",name);

    let email = document.getElementById('email').value;
    console.log("email: ",email);

    let password = document.getElementById('password').value;
    console.log("paswword: ",password);

    let data = {
        name,
        email,
        password,
    }

    let json_data = JSON.stringify(data);

    let response = await fetch('http://localhost:3001/user',{
        "method" : "POST",
        "headers" : {
            "Content-Type" : "application/json",
        },
        "body" : json_data,

    });

    let parsed_response = await response.text();

    if(parsed_response === "success") {
        alert("Form submitted succesfully");
        window.location.href = "login.html";
    }else {
        alert("Form submission failed");
    }
}

async function geuserData() {
     
    let userData = await fetch('/getData');
    console.log("userData: ",userData);
    let parsedUserData = await userData.json();
    console.log("parsedUserData: ",parsedUserData);

    let tbody = document.getElementById('tbody');
    let content ='';
     

    for(let i=0;i<parsedUserData.length;i++){
        content = content + `
        <tr>
        <td>${parsedUserData[i]._id}</td>
        <td><input type="text" name="name" id="name-${parsedUserData[i]._id}" value='${parsedUserData[i].name}' disabled="true"></td>
        <td><input type="email" name="email" id="email-${parsedUserData[i]._id}" value='${parsedUserData[i].email}' disabled="true"></td>
        <td><input type="password" name="password" id="password-${parsedUserData[i]._id}" value='${parsedUserData[i].password}' disabled="true"></td>
        <td><button onclick="handleEdit('${parsedUserData[i]._id}')">Edit</button></td>
        <td><button onclick="handleSave('${parsedUserData[i]._id}')">Save</button></td>
        <td><button onclick="handleDelete('${parsedUserData[i]._id}')">Delete</button></td>
        </tr>
        `
    }
    console.log("content: ",content);

    tbody.innerHTML = content;

}
// geuserData();

 function handleEdit(id) {
    console.log("Reached edit");
    let _id = id;
    console.log("id: ",_id);

    let name = document.getElementById(`name-${_id}`);
    console.log("name: ",name);
    name.disabled = false;

    let email = document.getElementById(`email-${_id}`);
    console.log("email: ",email);
    email.disabled = false;

    let password = document.getElementById(`password-${_id}`);
    console.log("password: ",password);
    password.disabled = false;


}

async function handleSave(id) {

    console.log("id: ",id);

    let name = document.getElementById(`name-${id}`).value;
    console.log("name: ",name);
    

    let email = document.getElementById(`email-${id}`).value;
    console.log("email: ",email);
    

    let password = document.getElementById(`password-${id}`).value;
    console.log("password: ",password);

    let data = {
        id,
        name,
        email,
        password,
    }

    let json_data = JSON.stringify(data);

    await fetch('/editData',{
        "method" : "PUT",
        "headers" : {
            "Content-Type" : "application/json"
        },
        "body" : json_data,

    })
    

    
}

 async function handleDelete(id) {

    console.log("id: ",id);

    let response = await fetch("/deleteData",{
        "method" : "DELETE",
        "headers" : {
            "Content-Type" : "text/plain",
        },
        "body" : id,
    });

    console.log("response: ",response);
    let parsed_response = await response.text();
    console.log("parsed_response: ",parsed_response);

    if(parsed_response === "success") {
        alert("Deletion successfull");
    }else {
        alert("Deletion failed");
    }
 }

 function validateName() {
    let name = document.getElementById('name').value;
    console.log("name: ",name);

    let name_error = document.getElementById('name-error');

    let name_regex = /^[A-Za-z]{2,30}( [A-Za-z]{2,30})?$/;

    let isNameValid = name_regex.test(name);
    console.log("isNameValid: ",isNameValid);

    if(!isNameValid) {
        name_error.innerHTML = "Invalid Name";
        return;
    }else {
        name_error.innerHTML = "";
        return;
    }
 }

 function validateEmail(){
    let email = document.getElementById('email').value;
    console.log("email: ",email);

    let email_error = document.getElementById('email-error');

    let email_regex = /^[a-z0-9_-]*@([a-z0-9]+)*(\.[a-z]{2,3})$/i

    let isEmailValid = email_regex.test(email);
    console.log("isEmailValid: ",isEmailValid);

    if(!isEmailValid) {
        email_error.innerHTML = "Invalid Email";
        return;
    }else {
        email_error.innerHTML = "";
        return;
    }
 }

 function validatePassword() {
    let password = document.getElementById('password').value;
    console.log("password: ",password);

    let password_error = document.getElementById('password-error');

    let password_regex = /^[a-z0-9,-=_@\.]{6,}$/;

    let isPasswordValid = password_regex.test(password);
    console.log("isPasswordValid: ",isPasswordValid);

    if(!isPasswordValid) {
        password_error.innerHTML = "Invalid Password";
        return;
    }else {
        password_error.innerHTML = "";
        return;
    }
 }

 async function testAPI(){
    let response = await fetch('http://192.168.150.134:3001/test');

    let parsed_response = await response.json();
    console.log("parsed_response: ",parsed_response);

    if(parsed_response){
        alert(parsed_response.message);
    }else{
        alert("something went wrong");
    }
 }


 async function login() {
    let email = document.getElementById('login_email').value;
    console.log("email: ",email);

    let password = document.getElementById('login_password').value;
    console.log("passwor: ",password);

    let datas = {
        email,
        password,
    }

    let json_data = JSON.stringify(datas);
    console.log("json_data: ",json_data);

    let response = await fetch('http://localhost:3001/login',{
        method : "POST",
        headers : {
            "Content-Type" : "application/json",
        },
        body : json_data,
    });

    let parsed_response = await response.json();
    console.log("parsed_response: ",parsed_response);

    if(parsed_response.success) {
        let token = parsed_response.data;
        console.log("token: ",token);

        localStorage.setItem('token',token);
        window.location.href = "get_user.html";
        alert(parsed_response.message);
        return;
    }else {
        alert(parsed_response.message);
        return;
    }
 }