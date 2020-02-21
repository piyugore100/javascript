// Error handling :-  

//  Error 
//  un expected condition / problem occured while execution the program called error .

//  if error occures its terminates the exiecution of the program  

//  to continue the execution of the program even thought error occured uou need to handle the 
//  error and providng alternative solution . 


//  why is error handling necessary ? 

//  1. to continue execution of the program 
//  2. execute alternative solution for the featurewhere error occuerd .
//  3. display user friednly  message to the user. 


//  creating an error Object  

// there are sevan other error type in javascript 





// create an intances represnting an error that occres when an iternal error in the javascript engine 
// EvalError:-

// Creates an instance representing an error that occurs regarding the global function eval().
// InternalError :-

// Creates an instance representing an error that occurs when an internal error in the JavaScript engine is thrown. E.g. "too much recursion".
// RangeError:-

// Creates an instance representing an error that occurs when a numeric variable orarameter is outside of its valid range.
// ReferenceError:-

// Creates an instance representing an error that occurs when de-referencing an invalid reference.
// SyntaxError:-

// Creates an instance representing a syntax error that occurs while parsing code in eval().
// TypeError:-

// Creates an instance representing an error that occurs when a variable or parameter is not of a valid type.
// URIError :-

// Creates an instance representing an error that occurs when encodeURI() or decodeURI() are passed invalid parameters



//  try :- try block  is used to write error pronr code / problematic code 

//  catch :- catch block execute if an eeror occuerd in the try block. 

//  catch block  must be just after the closing of try block 

//  catch block is used to handle error, execute alternavie soluation display user message 

//  without catch block error cannot be handled 


//  finally :- finally block alwayes  execute display error or not 
//  finally block is used to realases the resonces like closing dadabase connection 

//  throw :-  throw keyword is used to create and throw a new error in  the call stack 




// create a new error 

// new SyntaxError("my error");
// console.log("after error");  

// try{
// console.log("start");
// // console.log(name); 


// } catch(e){ 
//     console.log("error");
// console.log("end");
// }  


// try{
//     console.log("start");
//     // console.log(name); 
    
    
//     } catch(e){ 
//         console.log("error");
//     } finally {
//         console.log("this will alwyes execute");

//     }
//     console.log("end");


    // try{
    //     console.log("start");
    //     // console.log(name); 
        
        
    //     } 
    //         console.log("error");
    //     } finally {
    //         console.log("this will alwyes execute");
    
        
    //     console.log("end"); 

    // function validadeEmail(email) {
    //     if(email == "abc@gmail.com") {
    //         console.log("valid email");
    //     } else {
    //         throw new Error("invalid email");
    //     }
    // }
    //     try {
    //         validadeEmail("abc@gmail.com");

    //     } catch (e) {
    //         console.log("please enter valid email");
    //     }


    // Dom - (document Object model) :=


    // Dom is the dynamic repsention of a web page maintainted by the web page 

    // web broswer  create Dom tree by reading the hhml Content. 


    // whrer you  reload a web page  then web re create the Dom tree .Content


    // the html code  in the  web page is not in sync with the dom it is used 

    // only once to create the Dom tree .

    // Imp : if uou want change content or performance any opration  on the web page displayed in the 
    // browser, without reloading then you have make changes directly to the Dom .




    // how to acces  Dom  nodes 

    // there are 6 function avilable in javascript to acess the Dom node 

    // 1. getElemntById("id") -> return a single node having same id as provided 

    // 2.getElemntByName("name")-> return a list of node matching the provided name 

    // 3. getElemntBytagname("tagname")-> return a list of all nodes create form the provided

    // tag 

    // 4.getElemntByClassName("classnname")-> return a list of all  node having the provided

    // class 

    // 5.queryselctor ("css selector") -> return a node macting the provided css selector 

    // 6. queryselctorAll("css selector")-> return a list of node matching the provided css selector






    // javascript :-

    // can be used to perform any opartion on the Dom . 





     
    
    
    


