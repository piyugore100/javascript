//  what is difrent bten primitive variable nd refarnce variables 

//  primitive variables:- the variables which are used to store the primitivevalues are called primitive variable.are

//  ex:-

//  var num = 100;
//  var name = "abc"

//  refarnce variables :- the variables which are used to store the refarnce (memeory address) of object, funcation, Array. 


//  are called Referenc variables. 



//   var a = 10;
//  var b = a;
//  a = 20;

//  console.log(a, b); 


//  var a = {name:"abc"};
//  var b = a;
//  a.name = "pqr"; 

//  console.log(a.name,b.name); 


var dog = {
    name: "tommy",
    age:10

} 

dog.name = "pqrs" ; // replace value of exiting property if available or add new.

dog.color = "balck";
console.log(dog);

console.log(dog.name);