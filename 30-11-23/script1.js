  //synchronous single threaded operation

  //first synchronous operation will be done,then after will asynchronous operation will be done 

  console.log("hello");
  console.log("hai");

  setTimeout(() => {
    console.log("From setTimeout..");    //callback function 
  },0);

  //let datas = fetch('https://jsonplaceholder.typicode.com/users');
  //console.log("datas: ",datas);

  console.log("welcome");

  //web space environment
  //javascript engine - caalback queue and microtask queue(higher priority)
  //event loop
  //call stack


  let xhr = new XMLHttpRequest();
  //get
  //post
  //put
  //delete

  xhr.open("get",'https://jsonplaceholder.typicode.com/users');
  xhr.send();

  console.log("xhr: ",xhr);

  xhr.onreadystatechange = function() {
    console.log("readystate: ",xhr.readyState);
    console.log("statuscode:",xhr.status);

    
  }

