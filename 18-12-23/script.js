



let xhr = new XMLHttpRequest();

let btn = document.getElementById('btn');
btn.addEventListener('click',() =>{
  xhr.send();
});
//get
//post
//put
//delete

xhr.open("get",'https://fakestoreapi.com/products');


console.log("xhr: ",xhr);

xhr.onreadystatechange = function() {
  console.log("readystate: ",xhr.readyState);
  console.log("statuscode:",xhr.status);

  let content =document.getElementById('content');

  if(xhr.readyState == 4) {
    
    if(xhr.status == 200) {

      let response = xhr.response;
      console.log("response: ",response);
      console.log("type of response : ",typeof(response));

      let parsed_response = JSON.parse(response);
      console.log("parsed_response: ",parsed_response);
      console.log("type of parsed_response: ",typeof(parsed_response));

      datas = '';

      for(let i=0; i<parsed_response.length;i++) {
        datas = datas + `
        <div>
        <div>${parsed_response[i].id}</div>
        <div>${parsed_response[i].title}</div>
        <div>${parsed_response[i].price}</div>
        <div>${parsed_response[i].description}</div>
        <div><img src="${parsed_response[i].image}" alt="" width="20px" height="30px"></div>
        </div>
        `
      }
       content.innerHTML = datas;

    }else {
      console.log("Failed");
    }

  }else {
    console.log("State not completed");
  }

  
}



