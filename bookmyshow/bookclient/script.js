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

async function getFilmData() {
    let filmData = await fetch('/getFilms');
    console.log("filmData: ",filmData);
    let parsedFilmData = await filmData.json();
    console.log("parsedFilmData: ",parsedFilmData);

    let filmcontainer = document.getElementById('card-body');
    let content ='';

    for(let i=0;i<parsedFilmData.length;i++){
        content += `
        <div class="card-body>
        <img src="../../bookmyshow/images/downloadvaliban.jpg>
        <h5 class="card-title" name="title" id="title-${parsedFilmData[i]._id}" value="${parsedFilmData[i].title}">
        <h6 class="card-actor" name="actot" id="actor-${parsedFilmData[i]._id}" value="${parsedFilmData[i].actor}">
        <h6 class="card-director" name="director" id="director-${parsedFilmData[i]._id}" value="${parsedFilmData[i].director}">
        <div>
        `;
    }

    filmcontainer.innerHTML = content;
     




}