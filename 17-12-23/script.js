




let xhr = new XMLHttpRequest();



xhr.open("get",'https://fakestoreapi.com/products');
xhr.send();


console.log("xhr: ",xhr);

xhr.onreadystatechange = function() {
  

  let lists =document.getElementById('lists');
     let response = xhr.response;
     console.log("response: ",response);

 
      let parsed_response = JSON.parse(response);
      console.log("parsed_response: ",parsed_response);
      console.log("type of parsed_response: ",typeof(parsed_response));

      datas = '';

      for(let i=0; i<parsed_response.length;i++) {
        datas = datas + `
       <div class="card">
       <h3 class="id">${parsed_response[i].id}</h3>
       <h3 class="title">${parsed_response[i].title}</h3>
       
       <p class="price">${parsed_response[i].price}</p>
       <p class="description">${parsed_response[i].description}</p>
       <img src=${parsed_response[i].image} alt="image" class="image" width="20px" height="30px">
       </div>
        `
      }
       lists.innerHTML = datas;

    
  
}
