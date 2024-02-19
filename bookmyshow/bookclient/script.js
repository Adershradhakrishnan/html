async function submitForm(){
    let title = document.getElementById('title').value;
    console.log("title: ",title);
    let actor = document.getElementById('actor').value;
    console.log("actor: ",actor);
    let director = document.getElementById('director').value;
    console.log("director: ",director);

    let imageInput = document.getElementById('image');

    if(imageInput.files && imageInput.files[0]){
        const reader = new FileReader();

        reader.onload = async function (e) {
            const base64Image = e.target.result;
            console.log("base64Image: ",base64Image);

            let data = {
                title,
                actor,
                director,
                base64Image,
            }

            let json_data = JSON.stringify(data);
            try{
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

            } catch(error) {
                console.log("Error: ",error);
                alert("An error occured while submitting the form");
            }
            
        }
        reader.readAsDataURL(imageInput.files[0]);
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
        <img src="${parsedFilmData[i].image}" alt="User Image" style="max-width:100px;max-height:100px;">
        <h5 class="card-title" name="title" id="title-${parsedFilmData[i]._id}">${parsedFilmData[i].title}</h5>
        <h6 class="card-actor" name="actor" id="actor-${parsedFilmData[i]._id}">${parsedFilmData[i].actor}</h6>
        <h6 class="card-director" name="director" id="director-${parsedFilmData[i]._id}">${parsedFilmData[i].director}</h6>
        <a href="details.html" onclick="detailsmovie('${parsedFilmData[i]._id}')">Details</a>
        <div>
        `;
    }

    filmcontainer.innerHTML = content;
}

    getFilmData();

    async function detailsmovie(id) {

        let _id = id;
        console.log("_id: ",_id);

        let title = document.getElementById(`title-${id}`).value;
        console.log("title: ",title);
    }




   

   
    

   
    




   

    

    
     




