 //conditional statements

 //if
 //else-if
 //if-else-if
 //switch

 {
    let a = 20;
    if (a == 10) {
        console.log("success");
    } else if (a == 15) {
        console.log("processing");
    } else if (a == 20) {
        console.log("completed");
    } else {
        console.log("failed");
    }

    //+,-,/,%,++,-- -> Arithematic operators
    //<,>,<=,>=,==,===,!= -> Comparison operators
    // &&,||,!

    

    //pre increment
    let num1 = 10;
    let preIncrNum = ++num1;
    console.log("preIncrNum: ",preIncrNum);
    

    //post increment
    let num2 = 10;
    let postIncrNum = num2++;
    console.log("postIncrNum: ",postIncrNum);

    //pre decrement
    let num3 = 10;
    let preDecrNum = --num3;
    console.log("preDecrNum: ",preDecrNum);

    //post decrement
    let num4 = 10;
    let postDecrNum = num4--;
    console.log("postDecrNum: ",postDecrNum);
    
    let num5 = 10;
    let num6 = 10;

    if (num5 == num6) {
        console.log("both values are equal");
    }

    if (num5 === num6) {
        console.log("both values and their datatypes are equal");
    }

    let day = 1;

    switch(day) {

        case 1 :
            console.log("monday");
            break;

        case 2 :
            console.log("tuesday");
            break;

        case 3 :
            console.log("wednesday");
            break;

        case 4 :
            console.log("thursday");
            break;

        case 5 :
            console.log("friday");
            break;

        case 6 :
            console.log("saturday");
            break;

        case 7 :
            console.log("sunday");
            break;

    }

 }

 {
    //Loops

    //for
    //while
    //do-while

    for(let i=0; i<10; i++) {
        console.log("hello world");

    }

    let i = 0;
    while(i < 10) {
        console.log("hai");
        i++;

    }

    let j=11;
    do{
        console.log("welcome");
        j++;
    } while(j<10)

    for(let i=1; i<10; i++) {
        if(i == 3) {
            continue;
        }

        if(i == 7) {
            break;
        }
        console.log(i);
    }

    //sum
    
    let sum = 0;
    for(let i=0; i<=10; i++) {
        sum = sum + i;
    }
    console.log("sum: ",sum);

    //product

    let product = 1;
    for(let i=1; i<=10; i++) {
        product = product * i;
    }
    console.log("product: ",product);
     //sum

    let k =0;
    while(k<=10) {
        sum = sum + k;
        k++;
    }
    console.log("sum: ",sum);

    //factorial

    let fact = 1;
    let num  = 5;

    for(let i=num; i>0; i--) {
        //i=5 -> fact = fact * i -> fact = 1*5 =5
        //..
        //...
        //i=1 -> fact = fact *i -> fact = 120*1 =120
        fact = fact * i;
    }
    console.log("Factorial: ",fact);

    //Fibanocci series (0 1 1 2 3 5 8 .....)

    console.log("Fibanocci series");
    let sum1 = 0;
    let limit = 10;
    let a = 0;
    let b = 1;
    let l = 0;

    while(l <= limit) {

        sum1 = sum1 + a;
        console.log(sum1);
        a = b;
        b = sum1;
        l++;
    }

    //even and odd number sum

    console.log("sum");
    sum1 = 0;
    sum2 = 0;
    for (let i=0; i<=50; i++) {
        if(i%2==0) {
             sum1=sum1+i;
        }

        if(i%2==1) {
            sum2=sum2+i;
        } 
        
    }
    console.log(sum1);
    console.log(sum2);


}

{
    //array sum of elements

    let arr = [50,30,10,40,20];
    let sum = 0;
    for(let i=0;i<arr.length;i++) {
        
        sum = sum + arr[i];
    }
    console.log("sum: ",sum);

    //average

    let avg = sum/arr.length;
    console.log("avg: ",avg);

    //find minimum value in an array

    let min = arr[0];
    for(let i=0;i<arr.length;i++) {
        if(arr[i] < min) {
            min = arr[i];
        }
    }
    console.log("Min: ",min);

    //find maximum value in an array

    let max = arr[0];
    for(let i=0;i<arr.length;i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    console.log("Max: ",max);
}

{
    //change negative number in an array to positive

    let arr = [10,-23,30,-34,54];
    for(let i=0;i<arr.length;i++) {

        if(arr[i] < 0) {
            arr[i] = arr[i]* -1;
        }
    }
    console.log("arr: ",arr);

    //program to reverse a string

    let str = "Hello";
    let reverse = '';

    for(let i=str.length-1; i>=0; i--) {

        reverse = reverse + str[i];
    }
    console.log("Reversed string: ",reverse);


}

{
    //letters in an array changes to upper an lower cases

    let letterarray=['q','S','a','B'];
    let upperarray=[];
    let lowerarray=[];
     for(let i=0;i<letterarray.length;i++) {
        upperarray[i]=letterarray[i].toUpperCase();
        lowerarray[i]=letterarray[i].toLowerCase();

     }
     console.log("uppercase array: ",upperarray);
     console.log("lowercase array: ",lowerarray);
}

{

   //multiplication table using nested loops
   for(let i=1; i<=10; i++) {
      //i=1
      //i=2
    console.log('\n');

    for(j=1; j<=10; j++) {
        //i=1
        //          i*j
        //j=1 ->1*1
        //j=2 ->1*2
        //j=3 ->1*3

        //i=2
        //         i*j
        //j=1 ->2*1
        //j=2 ->2*2
        console.log(`${i} * ${j} = ${i*j}`)
    }
}
   //program to print star pattern using nested for loops

   let string = '';
   //string = '*\n**\n***\n'
   for(let i=1;i<=10;i++) {
    for(let j=1;j<=i;j++) {
        string = string + '*';
    }
     string = string + '\n';
   }

    console.log(string);

}

{
    //functions

    //function definition

    function printHello() {
        console.log("Helloworld");
        console.log("Hai");
    }

    printHello(); //function call

    //Named function

    function getAge() {
        return 12;
        console.log("not executable");
    }
     let age = getAge();
     console.log("getAge: ",age);

     //Anoynmous function

     let getName = function() {
        console.log("get named function called");
        return "john";
     }

      let name = getName();
      console.log("Name: ",name);

      //Arrow function

      let getMarks = () =>{
        console.log("arrow function called");
        return 70;
      }
       let mark = getMarks();
       console.log("Mark: ",mark);


       //function with parameter

       function greeting(message,message1) {
        console.log("Message: ",message);
        console.log("Message1: ",message1);

       }
       greeting("hello","hai"); //argument

       function sum() {

        //sum
        let sum =0;

    let k =0;
    while(k<=10) {
        sum = sum + k;
        k++;
    }
    console.log("sum: ",sum);

       }
       sum();


       function factorial(num) {

         //factorial

    let fact = 1;
    

    for(let i=num; i>0; i--) {
        //i=5 -> fact = fact * i -> fact = 1*5 =5
        //..
        //...
        //i=1 -> fact = fact *i -> fact = 120*1 =120
        fact = fact * i;
    }
    console.log("Factorial: ",fact);

       }
       factorial(6);


       function fibanocci(num) {
          //Fibanocci series (0 1 1 2 3 5 8 .....)

    console.log("Fibanocci series");
    let sum1 = 0;
    
    let a = 0;
    let b = 1;
    let l = 0;

    while(l <= num) {

        sum1 = sum1 + a;
        console.log(sum1);
        a = b;
        b = sum1;
        l++;
    }

       }
       fibanocci(20);

       function evenoddsum(num){


    //even and odd number sum

    console.log("sum");
    sum1 = 0;
    sum2 = 0;
    for (let i=0; i<=num; i++) {
        if(i%2==0) {
             sum1=sum1+i;
        }

        if(i%2==1) {
            sum2=sum2+i;
        } 
        
    }
    console.log(sum1);
    console.log(sum2);

       }
       evenoddsum(5);

       function arraysum(arr) {

         //array sum of elements

    
    let sum = 0;
    for(let i=0;i<arr.length;i++) {
        
        sum = sum + arr[i];
    }
    console.log("sum: ",sum);

       }
    
        let arr = [50,30,10,40,20];
       arraysum(arr);

       function arrayavg(arr) {
        
        let sum = 0;
        for(let i=0;i<arr.length;i++) {
            
            sum = sum + arr[i];
        }
        console.log("sum: ",sum);
    
        //average
    
        let avg = sum/arr.length;
        console.log("avg: ",avg);
    
       }
       let arr1 = [50,30,10,40,20];
       arrayavg(arr);

       //program to count vowels in a string


        function countvowel() {
        
        for(let i=0;i<str.length;i++) {
            if (str[i]=='a' ||str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u')
            console.log(str[i]);
        }
    }
        let str = "hai welcome";
        countvowel(str);
        
    }

    {
        function arraysame(arr){
        
        let arr1=[];
        for(let i=0;i<=arr.length;i++){
            for(let j=i+1;j<=arr.length;j++){
                if(arr[i]==arr[j]){
                    arr1[i]=arr[i];
                }
            }
        }
        console.log(arr1);
    }
    let arr=[1,6,1,4,5,6];
    arraysame(arr);
}

{
    console.log("\n\n\n");

     //update function

     function update(a) {
        a = "New value";
        console.log("From update function,a: ",a)
     }

     function updateArr(arr) {
        arr[0] = "New value";
     }

     function updateObj(obj) {
        obj.name = "jane";
     }

     let a = 10;
     let arr = [1,2,3];
     let obj = {name : "john", age : 30};

     //call by value

     console.log("a before: ",a);
     update(a);
     console.log("a after: ",a);

     //call by reference

     console.log("arr before: ",arr);
     updateArr(arr);
     console.log("arr after: ",arr);

     //call by reference

     console.log("obj before: ",obj);
     updateObj(obj);
     console.log("obj after: ",obj);


     //closure
     //A function along with its environment

     function outerFunction() {
        let greeting = "Hai! from outer function";

        function innerFunction() {
        function innerFunction1(){
            console.log(greeting);
        }
         return innerFunction1;
     }
         return innerFunction;
     }

     let result = outerFunction(); 
        console.log("result: ",result);

    let result1 = result();
    console.log("result1: ",result1);
        result1();

        //innerFunction1(); //gives error

   // let innerFun = function innerFunction() {
      //  console.log(greeting);
   // };
     
  //  console.log("innerFun: ",innerFun);

    //innerFun();

    //innerFun();

    //methods of DOM

    let btn = document.getElementById('btn');
    console.log("btn: ",btn);
    console.log("Button content: ",btn.textContent); //textContent or innerHTML

    let container = document.getElementsByClassName('container');
    console.log("container: ",container);

    console.log("container1: ",container[0]);
    console.log("container1 content: ",container[0].textContent);
    console.log("container2: ",container[1]);
    console.log("container2 content: ",container[1].textContent);
    console.log("container3: ",container[2]);
    console.log("container3 content: ",container[2].textContent);

    let para = document.getElementsByTagName('p');
    console.log("para: ",para);

    console.log("paragraph1: ",para[0]);
    console.log("paragraph1 content: ",para[0].textContent);
    console.log("paragraph2: ",para[1]);
    console.log("paragraph2 content: ",para[1].textContent);
    console.log("paragraph3: ",para[2]);
    console.log("paragraph3 content: ",para[2].textContent);

    let listItem = document.querySelector('.container #box ul li');
    console.log("listItem: ",listItem);
    console.log("listItem content: ",listItem.textContent);
    console.log("listItem innerHTML: ",listItem.innerHTML);

    let btn1 = document.getElementById('btn1');
    btn1.innerHTML = "click me";


 }

 {
    console.log("\n\n\n");
    //Event listners

    let btn = document.getElementById('btn');
    console.log("btn: ",btn);

    let inp = document.getElementById('inp');
    console.log("inp: ",inp);

    btn.addEventListener('click', function (){ 
        alert("Button Clicked");
    });

    btn.addEventListener('mouseover', function (){
        console.log("mouse over event fired...");
    });

    btn.addEventListener('mouseout', function() {
        console.log("mouse out event fired..");
    });

    btn.addEventListener('mousedown', function() {
        console.log("mouse down event fired..");
    });

    btn.addEventListener('mouseup', function() {
        console.log("mouse up event fired..");
    });

    btn.addEventListener('mousemove', function() {
        console.log("mouse move event fired..");
    });

    inp.addEventListener('keydown', function() {
        console.log("key down event fired...");
    });

    inp.addEventListener('keyup', function() {
        console.log("key up event fired..");
    });

    console.log("\n\n\n");

    //Math functions

    console.log("Math.sqrt(4): ",Math.sqrt(16)); //4
    console.log("Math.round(10.5): ",Math.round(10.5)); //11
    console.log("Math.round(10.4): ",Math.round(10.4)); //10
    console.log("Math.ceil(10.1): ",Math.ceil(10.1));  //11
    console.log("Math.ceil(10.9): ",Math.ceil(10.9));  //11
    console.log("Math.floor(10.1): ",Math.floor(10.1)); //10
    console.log("Math.floor(10.9): ",Math.floor(10.9)); //10
    console.log("Math.abs(2): ",Math.abs(2));  //2
    console.log("Math.abs(-2): ",Math.abs(-2));  //2
    console.log("Math.PI: ",Math.PI);  //3.14
    console.log("Math.max(10,20,30): ",Math.max(10,20,30)); //30
    console.log("Math.min(10,20,30): ",Math.min(10,20,30)); //10
    console.log("Math.pow(2,3): ",Math.pow(2,3)); //8

    //Timer

    //  setTimeout( function() {
    //     //alert("SetTimeout");
    //     console.log("From SetTimeout...");
    //  },5000) ;

    //  setInterval( function() {
    //     console.log("From SetInterval...");
    //  },3000);

     //call back function

     function printHello(callback) {
        console.log("callback: ",callback);
        callback();
        console.log("Hello...");

     }

     let callback = function() {
        console.log("callback function...");
     };
      printHello(callback);

}

{
    //program to print current time
    function putZero(value) {
        return value<10?"0"+value:value;

    }

    function show() {
        var time = document.getElementById('time');
        console.log("time: ",time);
        var dt = new Date();
        console.log("Date: ",dt);
        var hours = dt.getHours();
        var minutes = dt.getMinutes();
        var seconds = dt.getSeconds();

        var ampm = hours>12?"pm":"am";
        time.innerHTML = putZero(hours%12) +":" +  putZero(minutes) +":" + putZero(seconds) + ampm;

        // setTimeout(function () {
        //     show();

        // },1000);

        // }
        // show();


    }

    {
        //spread operator

        let arr = [1,2,3,4,5];
        console.log("arr: ",arr);

        let arr_cont = [...arr,6];
        console.log("arr_cont: ",arr_cont);

        let obj = {
            firstName : "mike",
            lastName : "henry",

        }
        console.log("obj: ",obj);

        let obj_cont  = {
            ...obj,
            age:30,

        }
        console.log("obj_cont: ",obj_cont);
    }

    {
        //destructuring

        let arr = [1,2,3,4,5];
        console.log("arr: ",arr);

        let [a,b,c,d,e] = arr;
        
        console.log("a: ",a);
        console.log("b: ",b);
        console.log("c: ",c);
        console.log("d: ",d);
        console.log("e: ",e);

        let obj = {
            firstName : "mike",
            lastName : "henry",

        }
        console.log("obj: ",obj);

        let {firstName,lastName} = obj;

        console.log("firstName: ",firstName);
        console.log("lastName: ",lastName);
    }

    {
        //Nested destructuring

        let matrix = [
            [1,2,3],
            [4,5,6],
            [7,8,9],
        ];
        console.log("matrix: ",matrix);

        let [row1,row2,row3] = matrix;

        console.log("row1: ",row1);
        console.log("row2: ",row2);
        console.log("row3: ",row3);

        let [a,b,c] = row1;
        let [d,e,f] = row2;
        let [g,h,i] = row3;

        console.log("a: ",a);
        console.log("b: ",b);
        console.log("c: ",c);
        console.log("d: ",d);
        console.log("e: ",e);
        console.log("f: ",f);
        console.log("g: ",g);
        console.log("h: ",h);
        console.log("i: ",i);

        let obj = {
            firstName : "john",
            lastName : "doe",
            age : 30,
            address : {
                street : "mystreet",
                city : "mycity",
                pincode :123456,
            },
        }

        console.log("obj: ",obj);

        let {firstName,lastName,age,address : {street,city,pincode}} = obj;

        console.log("firstName: ",firstName);
        console.log("lastName: ",lastName);
        console.log("age: ",age);
        console.log("street: ",street);
        console.log("city: ",city);
        console.log("pincode: ",pincode);



        
    }
     {
        let arr1 = [1,2,3];
        console.log("arr1: ",arr1);

        let arr2 = [4,5,6];
        console.log("arr2: ",arr2);

        let arr3 = [...arr1,...arr2,8,9];
        console.log("arr3: ",arr3);
     }  

     let obj1 = {
        firstName : "john",
     }
     console.log("obj1:",obj1);

     let obj2 = {
        lastName : "david",
     }
     console.log("obj2: ",obj2);

     let obj3 = {
        ...obj1,
        ...obj2,
        age :30,
     }
     console.log("obj3: ",obj3);





}

{
    //Array methods

    let arr = [
        {name : "amal", mark : 49, place : "malapuram"},
        {name : "anil", mark : 48, place : "ernakulam"},
        {name : "avin", mark:50, place: "alapuzha"},
        {name: "akhil", mark: 49, place: "kollam"},
    ];

    //for each

    arr.forEach((element,index) => {
        console.log("index: ",index);
        console.log("element: ",element.name);
    })

    //Find

    let findResult = arr.find((element) => {
        return element.name == "anil";
    });
    console.log("findResult: ",findResult);

    //filter
     let filterResult = arr.filter((element,index) => {
        return element.mark == 49;
     });
     console.log("filterResult: ",filterResult);

     //map

     let mapResult = arr.map((element) => {
        return element.name;
     });
     console.log("mapResult: ",mapResult);

     //reduce

     let totalMarks = arr.reduce((total,element) => {
        return total + element.mark;
     },0);
     console.log("totalMarks: ",totalMarks);


}

