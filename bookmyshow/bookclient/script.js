async function submitForm(){
    let title = document.getElementById('title').value;
    console.log("title: ",title);
    let actor = document.getElementById('actor').value;
    console.log("actor: ",actor);
    let director = document.getElementById('director').value;
    console.log("director: ",director);

    let data = {
        title,
        actor,
        director,
    }

    let json_data = JSON.stringify(data);
    let response = await fetch('/submit',{
        "method" : "POST",
        "headers" : {
            "Content-Type" : "application/json",
        },
        "body" : json_data,
    });

    let parsed_response = await response.text();

    if(parsed_response === "success") {
        alert("Form submitted succesfully");
    }else {
        alert("Form submission failed");
    }
}

async function getUserData() {
    let userData = await fetch('/getData');
    console.log("userData: ",userData);
    let parsedUserData = await userData.json();
    console.log("parsedUserData: ",parsedUserData);

    let tbody = document.getElementById('bodys');
    let content ='';
     




}