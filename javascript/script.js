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



