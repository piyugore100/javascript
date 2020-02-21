//  Dyanmically typed language: if a language does not dataTYPE   to declare a variable and as a funcation return typeof,in such language the type of a variable
//  is known until its initialization at runtime such language are called Dyanmically typed languages.



//  Examples:-
//  javascript
//  Php 

//  Statitcally typed language if the variable dataTYPEand funcation return  iskhown at the time of compliaction such language are called Statitcally

//  typed language

//  Ex.

//  c 
//  c++ 
//  java 

//  keyword:-

//  the words reserved by the language tobe used  its syntaxes are called keyword
//  Ex:-
//  if,else,for,while,do,class,new etc .

//  Comments:
//  comments ate the non excuteable textual information about the soruce  
// types:
// // single line comment  
// // * multi
// //  Line comment*

// Literal:
// a constant values which can be assgined to a variable 
// Ex 
// 100-number literal 
// true- boolean literal 
// "abce"-string literal 
// []-Array literal 
// {} Object literal 

// identifier:-
// a name given to a variable function,Object,Array,etc is called an identifier 

// An identifier can be a combination of alphabets ,digit -,$
// An identifiershould not start with a digit .Dyanmically

// oprator:-

// oprater are used to perform some oprations 
// Expression:- oprand oprater oprand 
// add= 10+20 

// Arthmatical oprators 
// +
// - 
// % (modes/mod) return remainder
// *
// /  
// logical operator 
// && and 
// ! Not 
// || or 

// condtional oprater
// >
// >=
// < 
// ==
// != 
// === 
// == - compare the values 

// === compare vlaes and type of vlaes 

// // 100==100-ture
// // 100=="100"-ture
// // 100== 

// Assignment opraters 

// = 
// +=
// -=
// *=
// /= 
// var sum =10
// sum = sum + 20;
// sum+=20 
 
// Unary oprator 
// ++ (increment)
// -- (decrement)
// pre increment 

// var id =1;
// // id++;   post increment 
// // ++id; pre increment 
// // console.log(id)
//  var a = 10;
//  var b =++a;
//  console.log(a,b); 

//  Ternary oprator 
//  condition ? stat1=e :state2;
//  if condition evaluates to true the executes statment1; 
//  if condition evaluates to false the executes statment2; 
 
//  var a = 10; 
//  if (a % 2 ==0) {
//  console.log("even");
// } else{
//     console.log("odd");
 

// variable ?

// variable is  a named rewriteable memeory  block used to store a value 

// variable declarion:-
//  syantax: var variableName ;
//  Ex: var id ;
//  var num;
//  console.log(num);
//  console.log(typeof num);//undefained 

//  note:  It recommeded to use lower camel case for variable name 
//  Ex: 
//  id 
//  name 
//  firstName 
//  loginStaus
//  userId 
//  isSessionActive  
//  variable initialization :-
//  assgining value to a variable first time after creation is called variable initialization

//  var num;  declaration 
//  num = 10;//intilization 
//  num=30;// value change/assginment 
//  var num =10; // declation cum intialization 
//  declaration and initialization mulitple variables 
//  var a = 10,b = 20 ,
//undefaine variable vs undeclaed variable 
// if a variable declared without initilization is called undefined variable 
// EX : 
//  var num ;
//  var city ="pune"
//  num is undefined variable 

 console.log(num);//undefined 
 console.log(city);//undeclred  

 control statements 
  the statemnt which change the flow of execution are  called control statements 

  there are 3 catogories of control statements 
 1. decision making 
  if 
  if else 
  else if 
  switch case
 2. looping 
     for (3 types)
     while  
     do while 

3. jumpimg 
     break 
     continue 
     return

     if 
 single  condition 
     a single block of code 
Syntax:
 if (condition){
      block of code //this will  execute only the condition is true
 }
 var a =10,b = 0;
 if (b!= 0){
      console.log(a / b);
 }
 if else
 single condition
 2 block of code
 Syntax:
} else{
 if(condition){
      stements;
      
 }

 var num = 23;
if (num % 2 ==0){
    console.log("even");
} else{
    console.log("odd");
}
note:- if there is single statements in the body of control statemtn  then '{' and '}' curly braces are optional.
noteesting if else 
if (condition){
     if (cond2){

     }else{

     }else{

     }
} 

var a =10, b = 200, c = 30;
 if (a > b && a > c){
     console.log("a is greater");
 } else if (b > a && b > c){
     console.log("b is greater");
 } else if (c > a && c > b){
     console.log ("c is greater")
 }
 switch (expresstion /value /variable){
      case.value1:{}
      case.value2:{}
      case.value3:{}
      case.value4:{}
      case.valueN:{}
      defult:{}
 }
  the defult will get execute  if the value does not match with any case 
  switch case has "fall throught behaviour"

  for loop 
  for loop is uesd to execute same block of code multiple Time
   Syntax:
    for (initlization;condtion; increment/decrement){
         body
    }
    initlization:-
     this section is used to declare and initlization couter variable which are used in the for body
     this section execute only once   first iteration 
     var  a;
     //intilization  outer variable  'a'
     for (a=1;; ){

     }
     //declaring and initlization local variable 'a'
     for (var a=0;;){}
     //for declaring multiple variable
      for (var a=0,b=10,c=20;;){}


      condition :-
      conditionis a second section in for loop, which decide  whether to execute body or not 
      we can weitr multiple condtion  combined  useding logoical oprator ||(or),&&(AND) 


      condition section alwayes execute before the iteration  form first to last itweration

      //single condtion
      for (var i=1; i<10; ) {}
 r
      //mulitple condtions
      for (var i=1;i<10 &&i>0;){}

      increment/decrement:-
      this section execute after each iteration
      this section is useally is used perform reset opartion requied after each iterations
      like incrementor decrementing the counter  variable value.
      pre or post increment and decrement does not matter here both have same result .

      for (var i=1; i<10;i++){

      }
      