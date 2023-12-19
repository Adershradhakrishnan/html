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






