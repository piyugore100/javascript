
  
// console.log(num.toString().split("").reverse().join("")); 

// num = num.toString();
// var str = '';
// for (var i = num.lenght-1; i >=0; i--){

//     str +=num.charAt(i);
// }
//   console.log(str);  
var num = 1234567; 
var   rnum = 0;
while (num > 0) {
rnum = (num +(num % 10)) * (num < 10 ? 1 : 10);

 num = Math.floor(num / 10);
}
console.log(rnum);