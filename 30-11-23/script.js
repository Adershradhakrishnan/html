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

 