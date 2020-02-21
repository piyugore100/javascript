// function  :--

// function is a  named blocked of logically reated statemtn used to perform an opration .a
// function are used to resusable  code 
// function make code more module 


// syntax:-

// function functionName(paramerters) {
//     // body
// } 

// Ex:- 

// function readFile(filename){
// open a file 

// read file 
// oparation file of data
// close fil 
// return data 
// }




// note :-  in javascript  function definitie can be used like a value mens we can assgin a function to a variables 

// and pass a function as an argument to another function  


//  function call 



function add(a,b) {
    return a + b;
} 
console.log(add);

// to call a funcaction appned '()' after  funcation name;

var sum = add(10, 20);
console.log(sum); 


//   paramenters vs arguments :-

// parameters are the local variables declaed in funcation sigature ,those are used to  accsept 

// values just before  exicuteing the funcation each Time . 


// ex:

// funcation add(a, b){}.here, 'a' &'b' are the funcation parameters. 


// areguments are the vzalues  which passed  to a funcation  call .


// EX:-
//  var sum = add(10, 20); // here 10 & 20 are the arguments 


// EX:- 

// var x = 20;

// var sum = add


//  function types :-

//  there are basically 2 types of function in javascript :- 


//  1.  Named funcation 

//  2.  Anonymous function 

// note :-  in ES6 a new function type  is introdcuted call arrow function 


// there are other therms used for function BUT ALL those  alimataly are among the  above types :

// self invoking function  expression 
// callback funcation 
// higher order function


// //  note  :-  




// in javascript , maching function parameters and  argument is not mandatray 

//  function add(a, b) {
//     //  return a + b;
//     console.log(a, b);
//  }

//  add();
//  add(10);
//  add(10, 20);
//  add(10, 20, 30);
//  add(10, 20, 30, 40);



// function add(a, b) {
// console.log(a, b);

// }

// add(1, 2);
// var f = add;
// f(20, 30);



// Named function :-


// If a function defined with a name then it is called as Named function. 


// ex:- 

// function functionName () {
//     // body
// }

// function add(a, b) {

// } 


// Anomyous function_

// if a function  defined  whiout named is  called as anomuous fincation  

// EX:-

// var variable = function () {
//     // body
// }

// var add = function (a, b) {
    // return a + b;
// }





// Naming standard :-


//  variable name :- 

//   first word in lowercase, first chacacter from second word onword should be in uppercase. 

//   EX:- 

//   variable name :
//   name:;
//   email;
//   firstName:;
//   isActive
//   isAuthentcatedUser 

//   function name:-

//   print() 

// getData ()
// findOne ()
// setEmail ()  


 

// hoisting :=  is a defult  behaviour javascript to move the varibale  and function declacrtion 


// to the top of current scope.  



// variable inizlition is not hoisted 
//  funcation expresstion is not hoisted



// name = "om sai classes"; // initilzation


// console.log(name);
// var name; //declaertion 


// funcation declations vs funcation expreasstion :-- 

// if a function defintion line strat with function keyword  then it called function

// declacrtion. 

// ex:=


// function fun() {

// } 



// if a  function definittion line dose not start  with function keyword then it called function expresstion  

// EX:-

// var fun = function abc () {  

// }



// function declacrtions are hoisted 

// function expressions are not hoisted. 



//  var abc = function print()  {
//     console.log("om sai classes");
// } 
//  abc();  


//    function print()  {
    // console.log("om sai classes");
// } 





// Self Involing function expressions 

(function () {
    console.log("SELF");
})();
 


 
 
