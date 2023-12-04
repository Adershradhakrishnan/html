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


       function isVowel(){
        let str = "hai welcome";
        function countVowels(str){
        let count = 0;
        for(let i=0;i<str.length;i++);

        if (isVowel(str[i])) {
            ++count;
        }
        }
        console.log("Str: ",str);
    }

       
    
        
       


    }