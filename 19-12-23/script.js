 const str1 = "The cat is white";
 const str2 = "rat eats fish";
 const str3 = "Is it ok fishe";
 const str4 = `
 Hello
 good meat
 is always good
 Hai
 `;

 const regexp1 = /a/;
 const result1 = regexp1.test(str1); //check if str1 contains letter 'a'
 console.log("result1: ",result1); //true


  //i- for case insentive search
 const regexp2 = /A/i;
 const result2 = regexp2.test(str1);  //check if str1 contains letter 'a' and performs case insentive search
 console.log("result2: ",result2); //true

 const regexp3 = /abc/;
 const result3 = regexp3.test(str1); //check if str1 contains 'abc'
 console.log("result3: ",result3); //false

 //[]- represents range
 const regexp4 = /[crb]a/;
 const result4 = regexp4.test(str1); //check if str1 contains 'c' 'r' or 'b' before 'a'
 console.log("result4: ",result4); //true

 const regexp5 = /[a-z]a/i;
 const result5 = regexp5.test(str1);
 console.log("result5: ",result5); //true

 const regexp6 = /[a-z0-9]a/i;
 const result6 = regexp6.test(str1);
 console.log("result6: ",result6);  //true

 const regexp7 = /^rat/i;
 const result7 = regexp7.test(str2);
 console.log("result7: ",result7); //true

 const regexp8 = /fish$/i;
 const result8 = regexp8.test(str2);
 console.log("result8: ",result8); //true

 const regexp9 = /^good/im;
 const result9 = regexp9.test(str4);
 console.log("result9: ",result9); //false

 const regexp10 = /good/im;
 const result10 = regexp10.test(str4);
 console.log("result10: ",result10); //true

 const regexp11 = /fishes?/im;  //word before '?' is optionel for matching
 const result11 = regexp11.test(str3);
 console.log("result11: ",result11); //true

 const regexp12 = /fish(es)?/im;  //'()' represents groups
 const result12 = regexp12.test(str3);
 console.log("result12: ",result12); //true

 const regexp13 = /fishes*$/i;  //the letter before '*' occur mutiple times in a string
 const result13 = regexp13.test(str3);
 console.log("result13: ",result13); //true

 const regexp14 = /fishes+$/i;
 const result14 = regexp14.test(str3);
 console.log("result14: ",result14); //false

 const regexp15 = /fish.$/i;
 const result15 = regexp15.test(str3);
 console.log("result15: ",result15); //true

 const regexp16 = /fish.*$/i;
 const result16 = regexp16.test(str3);
 console.log("result16: ",result16); //true

 {
    //input validation
    //A-Z,a-z
    //0-9
    //_
    //starts with chracter

    const regexInp = /^[a-z][a-z0-9]*$/i;

    function checkResult(value) {
        const result = regexInp.test(value);

      if(result) {
         return '';
      }else {
         return 'Invalid String';
      }
    }

    const value = "_J_9ashdjd";

    let validation_result = checkResult(value);
    console.log("validation_result: ",validation_result);

    function onChange(arg) {
      let validation_result = checkResult(arg.value);
      let label = document.getElementById('error');
      if(validation_result) {
         label.innerHTML = validation_result;
      }else {
         label.innerHTML = validation_result;
      }
    }


 }




 

















