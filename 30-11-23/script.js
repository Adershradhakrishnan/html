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