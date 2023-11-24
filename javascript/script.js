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



