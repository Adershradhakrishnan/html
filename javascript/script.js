//console.log("Hello javascript,From external javascript...");
//document.write("from javascript");

var a;//Variable Declaration
a=10;//Initialize
console.log("a: ",a);
//Datatypes
var str = "this is a string";//String
console.log("str: ",str);
console.log("Type of str: ",typeof(str));

var num = 12;//Number
console.log("num ",num);
console.log("Type of num: ",typeof(num));

var bool1 = true;//Boolean
console.log("bool1: ",bool1);
console.log("Type of bool1: ",typeof(bool1));

var u = undefined;//Undefined
console.log("u: ",u);
console.log("Type of u: ",typeof(u));

var n = null;//Null
console.log("n: ",n);
console.log("Type of n: ",typeof(n));

//Global object
console.log(window);
var bike = "hero honda";
console.log("bike: ",bike);

//variable scopes

//var
/*
-Adds to global object
-Function scoped
-Can be redecalred and modified at any time
*/
  
{var car = "bmw";
console.log("car: ",car);
console.log("window.car",window.car);
var car;
var car = "audi";
console.log("car: ",car);
car = "benz";
console.log("car: ",car);
}

console.log("car from outside of block: ",car);

//let

/*
 -does not add to global object
 -block scoped
 -cannot redeclared
 -can update value later
 -decalration and initialiazation can be done in two steps
 */

{let fruit = "apple";
console.log("fruit: ",fruit);
console.log("window.fruit",window.fruit);

//let fruit;//Not possible cannot redeclare

fruit = "orange";
console.log("fruit: ",fruit);

let food;//declare
food = "rice";//initialize
}

//console.log("fruit from outside of block: ",fruit);//Gives error (fruit is not defined)

//const

/* 
 -does not add to global object
 -block scoped
 -cannot redeclared
 -cannot be updated later
 -declaration and initialization must be done in single line
 */
{
const place = "new york";
console.log("place: ",place);
console.log("window.place: ",place);
// const place; //cannot redeclare, gives error

// place = "mumbai"; //not possible ,Assignment to constant variable

// const country; //Missing initializer in const declaration

}
 // console.log("place from outside the block: ",place); //Gives error (place is not defined)

 {
    let str = " Hello World "
     
    let length = str.length;
    console.log("Length: ",length);

    let toUpperCase = str.toUpperCase();
    console.log("toUpperCase: ",toUpperCase);

    let toLowerCase = str.toLowerCase();
    console.log("toLowerCase: ",toLowerCase);

    let length1 = str.toUpperCase().toLowerCase().toUpperCase().length;
    console.log("Length1: ",length1);

    let trimmedString = str.trim();
    console.log("trimmedString: ",trimmedString);
    let trimmedStringLength = trimmedString.length;
    console.log("trimmedStringLength: ",trimmedStringLength);

    let leftTrimmedString = str.trimStart();
    let leftTrimmedStringLength = leftTrimmedString.length;
    console.log("leftTrimmedString: ",leftTrimmedString);
    console.log("leftTrimmedStringLength: ",leftTrimmedStringLength);

    let rightTrimmedString = str.trimEnd();
    let rightTrimmedStringLength = rightTrimmedString.length;
    console.log("rightTrimmedString: ",rightTrimmedString);
    console.log("rightTrimmedStringLength: ",rightTrimmedStringLength);

    let subString = str.substring(0,3);
    console.log("subString: ",subString);

    let replacedString = str.replace("Hello","Hai");
    console.log("replacedString: ",replacedString);

    let isStartsWith = str.startsWith("Hello");
    console.log("isStartsWith: ",isStartsWith);

    let isEndsWith = str.endsWith("World");
    console.log("isEndsWith: ",isEndsWith);

    let splitString = str.split(','); //Converts string to array
    console.log("splitString: ",splitString);

    let joinedArray = splitString.join(' '); //converts array to string
    console.log("joinedArray: ",joinedArray);
     
    let concatString = str.concat();
    console.log("concatString: ",concatString);

} 

{
    let num = 10;
    let arr = [10,20,30,40,50];

    let myArr = [10,"hello",true,false,undefined,null,[0,'a',true]];
    console.log("arrLength: ",myArr.length);

    console.log("arr[2]: ",arr[2]);

    console.log("Index of 30: ",arr.indexOf(30));

    arr.push("End");
    console.log("push: ",arr); //adds an element to the end of an array

    arr.unshift("start");
    console.log("Unshift: ",arr); //adds an element to the start of an array

    arr.pop();
    console.log("Pop: ",arr); //removes last element from the array

    arr.shift();
    console.log("Shift: ",arr); //removes first element from the array

    arr.splice(1,2);
    console.log("Splice: ",arr); //arr.splice(startIndex,number of elements to be spliced)

    arr.splice(2,0,45);
    console.log("Splice: ",arr); //adds 45 to the 2nd index of the array

    arr[0] = 100;
    console.log("Splice: ",arr); //reassigns elements in 0th index of the array





}

{
    //objects

    let obj = {
        firstName: "john",
        lastName: "Doe",
        age: 40,
        canadian: false,
        marks :[50,70,100],
    
            
     }
    console.log("obj: ",obj);


    console.log("First name: ",obj.firstName);
    console.log("Canadian: ",obj.canadian);

    obj.firstName = "jane";
    console.log("obj: ",obj);

    obj.email = "jane12@gamil.com";
    console.log("obj: ",obj);

    //JSON String

    let json_str = JSON.stringify(obj); //converts javascript objects to json string

    console.log("json_str: ",json_str);

    json_str.firstName //not possible since it is a string 
    
    //json string format

    let json_str_format = `{
        "firstName": "john",
        "lastName": "Doe",
        "age": 40,
        "canadian": false,
        "marks" :[50,70,100],
    
            
     }` ;

     let json_to_obj = JSON.parse(json_str); //converts json string to javascript
     console.log("json_to_obj:",json_to_obj);


}



