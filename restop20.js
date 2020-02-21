// rest oprator 
// rest oparator is an Array which is used to store the argument passed while calling a function which does not have matching parameters .



function f1(a, b, c, ...demo) {
    console.log(a, b, c);
    console.log(arguments);
    console.log(demo);

} 
f1 (10,20,30,40,50); 