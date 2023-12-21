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

   //  function checkResult(value) {
   //      const result = regexInp.test(value);

   //    if(result) {
   //       return '';
   //    }else {
   //       return 'Invalid String';
   //    }
   //  }

   //  const value = "_J_9ashdjd";

   //  let validation_result = checkResult(value);
   //  console.log("validation_result: ",validation_result);

   //  function onChange(arg) {
   //    let validation_result = checkResult(arg.value);
   //    let label = document.getElementById('error');
   //    if(validation_result) {
   //       label.innerHTML = validation_result;
   //    }else {
   //       label.innerHTML = validation_result;
   //    }
   //  }


 }

 const str5 = "Hello";

 const regexp17 = /[kjm]/i; // if there is 'k' 'j' or 'm' there will be true
 const result17 = regexp17.test(str5);
 console.log("result17: ",result17); //false

 const regexp18 = /[^kjm]/i;
 const result18 = regexp18.test(str5); //if there is no kjm in the string it will true
 console.log("result18: ",result18); //true

 const regexp19 = /[H+]/i;
 const result19 = regexp19.test(str5); //atleast one 'H' is required
 console.log("result19: ",result19); //true

 const regexp20 = /O$/i;
 const result20 = regexp20.test(str5); //string ends with 'O'
 console.log("result20: ",result20); //true

 const regexp21 = /O?$/i;
 const result21 = regexp21.test(str5); //'O' in string ending is optionel
 console.log("result21: ",result21); //true

 const regexp22 = /O+$/i;
 const result22 = regexp22.test(str5); //atleast one 'O' is required at the string ending
 console.log("result22: ",result22); //true

 // {}- indicates the number of characters,a{2} means "aa",ie two 'a' is required

 const regexp23 = /L{2}o$/i; //'o' should be exactly after 2L's
 const result23 = regexp23.test(str5);
 console.log("result23: ",result23); //true

 const regexp24 = /L{2,4}o$/i; // 'o' should be exactly after 2 to 4 L's
 const result24 = regexp24.test(str5);
 console.log("result24: ",result24); //true

 const regexp25 = /HeL{2,4}o$/i; // 'o' should be exactly after between 2 to 4 L's and 'o' is required
 const result25 = regexp25.test(str5);
 console.log("result25: ",result25); //true

 const regexp26 = /HeL{2,}o$/i; //2 or more 'L' is required
 const result26 = regexp26.test(str5);
 console.log("result26: ",result26); //true

 // \- indicates escape character.used for matching any characters which has special meaning

 const regexp27 = /\d/i; //if there is any digits,it will be true else it will be false
 const result27 = regexp27.test(str5);
 console.log("result27: ",result27); //false

 const regexp28 = /\D/i; //if there is any non-digits it will be true,if there is only digits it will be false
 const result28 = regexp28.test(str5);
 console.log("result28: ",result28);//true

 //suppose we want to match '.' in a string ,since '.' has a special meaining in regular expressions it will not work at expected and will match everything

 const regexp29 =  /./i; //if there is '.' or anything it will match
 const result29 = regexp29.test(str5);
 console.log("result29: ",result29); //true

 //so we can write it as

 const regexp30 = /\./i; //if there is any '.' in the string it match,else it will be false
 const result30 = regexp30.test(str5);
 console.log("result30: ",result30);//false
// '\'(backslash) is used to escape special characters

//Date validation
//1

const regexpForDate = /^\d{1,2}-d{1,2}-d{4}$/i; //string should start with 1 or 2 digits,then aftr '-' symbol then again 1 or 2 digits,then after '-' symbol
//ending digits should be 4

const regexpForDate1 = /^([012]?\d|3[01])-([0]\d|[1][012])-(\d{4})$/i;

// function checkResult(value) {
//          const result = regexpForDate1.test(value);

//       if(result) {
//          return '';
//        }else {
//          return 'Invalid String';
//       }
//      }

//     const value = "16-12-23";

//      let validation_result = checkResult(value);
//     console.log("validation_result: ",validation_result);

//      function onChange(arg) {
//      let validation_result = checkResult(arg.value);
//       let label = document.getElementById('error');
//       if(validation_result) {
//          label.innerHTML = validation_result;
//       }else {
//           label.innerHTML = validation_result;
//        }
//     }

    //email validation

    const regexpForEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/i;
      
    function checkResult(value) {
      const result = regexpForEmail.test(value);

   if(result) {
      return '';
    }else {
      return 'Invalid String';
   }
  }

 const value = "adershsms@gmail.com";

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
























 

















