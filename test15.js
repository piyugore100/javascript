// data types 
// primative data types :-

// number 
// String 
// boolean 
// undefined 

// number datatypes :-
// In javascript all types number are respresed the number type 
// EX 
// 100 
// 10.20 
// 10e5 
// creating a number type variable 

// thre are 2 wayes to create a number 
// 1) By using number literal 
// EX: var num = 100;
// 2) By using Number () constuctor 
// ex:- var num2 = new Number (100) 

// var num = 100;
// console.log(typeof num); 
// console.log(num);


// var num2 = new number(100)
// console.log(type of num2);
// console.log(num2);



// console.log("100" * 10);
// console.log("100" * "10");
// console.log("100" - "10");
// console.log("100" / "10");
// console.log("100" + "10");
// console.log(100 + "10");
// console.log(100 + 10); 

// convarting a streing to number 
//  there are three  funcation to srting a string into  Number.  

//  number ()
// parasefloat()
//  parsInt ()


// var num = "abc";
// console.log(typeof num);

// console.log(typeof num);
// console.log(typeof Number(num));
// console.log(typeof parseFloat(num));
// console.log(typeof parseInt(num)); 

// console.log (number(num));
// console.log (parseFloat(num));
// console.log (numberInt(num));


// NaN not a Number 
//  NaN is a value of number 
// console.log(typeof NaN);

// NaN resprested a number value which is not a valid number.NaN
// if a expression contain a NaN the result of the expression become NaN 

// console.log(10 * undefined);
// console.log(10 * "10abc")
// console.log(10 * 20 +NaN);
// console.log (10 * 20 + number("12a"));



// Infinity 
// it is number type values which repretes a number which is out of range of number handling capacity  of javascipt engine;
// means a number is either  very small or very big 

// Infinity :- very big number 
// -Infinity :-very small number   



 
// console.log(typeof Infinity);

// console.log(10 / 0);

// var num =  1000000;

// while(num != Infinity) {
//     num *= 10000000;
//     console.log(num);

// }

// console.log(100 / 3);
// console.log(100 / 3).toFixed toFixed(2)); 



// var div = 100 / 3;
// console.log(div.toFixed());
// console.log(div.toFixed(1));
// console.log(div.toFixed(2));


// console.log(div.toFixed(3));


// Math 
// // Math.round()
// 0-4 -> if the digit after the floating poing number is beetwwen  0 and 4 then round() does not increment the intiger part 
// 5-9 -> if the digit after the floating point is between 5 and 9 then  round() incerement the intern part by one 

// It returns the integer number from the provinding number without  incrementing .

// Math. floor()
//  EX:-
// console.log(Math.floor(123.056));   //123
// console.log(Math.floor(123.156));   //123
// console.log(Math.floor(123.456));   //123
// console.log(Math.floor(123.956));   //124

//  Math.ceil()
// console.log(Math.ceil(123.056));   //123
// console.log(Math.ceil(123.156));   //123
// console.log(Math.ceil(123.456));   //123
// console.log(Math.ceil(123.956));   //124 


// // Math .random()
// // it is gives a random number  between 0 and 1

// console.log(Math.random());
// console.log(Math.random() * 10);
// console.log((Math.random() * 10).toFixed()
// console.log(Math.random()); 





// 5555

// // 20000 -2 
// // 500-3
//    var amount = 5555; 

//    var notes = parseInt(amount / 10);
//    amount =amount % 10;
//    console.log("10: "+ notes);

   
//    var notes = parseInt(amount / 5);
//    amount =amount % 5;
//    console.log("5: "+ notes); 


   
//    var notes = parseInt(amount / 2);
//    amount =amount % 2;
//    console.log("2: "+ notes);


//    var notes = parseInt(amount / 1);
//    amount =amount % 1;
//    console.log("1: "+ notes); 

//      amount = 5555;
//    var currency  = [200,500,200,100,50,20,10,5,2,1];

//    for (var curr of currency) {
//        var  notes = parseInt(amount / curr);
//        if (notes < 1)
//        continue;
//        console.log(curr + " : " + notes);
//        amount = amount % curr;
//    }



//    String:-

//    string is sequnce of Characters 

//    Ex:-
//     the string are internally in Character Arrays
//     string are immmutable menas string object cannot be changed 
//     Ex:-
     
    // var name = "topper skills";
    // name.concat("pune");
    // console.log(name);

    // string literal 
    // In javascipt string can be represented by useing 
    // 1) single quote ''
    // 2) double quote ""

    // EX:-

    // var name = "topper class"
    // var name2 ='topper class'

    // console.log(name);
    // console.log(name2);


    // wayes two types :-

    // var name ="Topper skills";
    // var name2= new string ("Topper skills");



    // var name = "topper skills";
    // to get total number character in a string 
    

    // get an  index /postion of a sub string
    
    
//     indexof(substring)
//     indexof(substring,starposition)
//     lastIndex(substring)
//     lastIndex(substring,starposition)
//    sreach (regularexpression)


// var name = "topper skills";

// console.log(name.indexOf("p",));
// console.log(name.lastIndexOf("p"));
 
// // var name ="topper skills";

// // console.log(name.search("[0-9]"));
// // console.log(name.indexOf("[0-9]"));


// var name = "topper skills";
// // get  character by index

// character set 

// ASCII character set -> english + digits + special Symbol <= 256



// 2^16 = 65536

// character encodeing : the mechanisum of assging a uniqe number to character in the character
// set is called as character encodeing 


// A = 65
// B = 66
// C = 67
// . 
// .

// a = 97 
// b = 98 
// c = 99
// . 
// . 

// 0-48 
// 1-49 
// . 
// . 
// 9 =57

// 9 = 57


// Character CharacterData(index)

// Character encoding number charCodeAt(index)

 var name ="abcaaab";

 var counter = 0;

// console.log(name.charAt(0));
// console.log(name.charCodeAt(0));


// for(var i = 0; i< name.length; i++){

//     if (name.charCodeAt9=(1) >= 48 && name.charCodeAt(i) <= 57) {

    
//         counter++;
//     }
// }
// console.log("Total: "+ counter);



// Addtion:

// var name = "abc12aaab099aa3451";


// var counter = 0;
// var sum = 0;

// for (var i = 0; i < name.length; i++) {
    
//     if(name.charCodeAt(i) >= 48 && name.charCodeAt(i) <=57) {
//         counter++
//         sum += parseInt(name.charAt(i));
//     }
// }
// console.log("Total: " + counter);
// console.log("sum: " +sum);



// // get a sub string from a string 
// slice(index) ->  returns a sub string form the providing index to end 
// slice (starIndex, endIndex) ->  returns a sub string from starIndex to 

// endIndex 1 (endIndex is exclued)

var name = "topper skills"

// console.log (name.slice(3));
// console.log (name.slice(3));
// console.log (name.slice(-5));


// console.log (name.slice(-5,-1));

// substring(startindex)-> return a substring starting  form  start index to the end of satrting 

// substring(strating, ending)  


console.log(name.slice(-5, -1));
console.log(name.substring(-5, -1));



console.log(name.slice(5));
console.log(name.substring(5, 1));
console.log(name.substring(1, 5));


// WHAT IS differnt betn slice () and substring () menthod  ?

// 1 slice() can take negativ indexes but substring () cannot

// 2 substrin() can swap indexs if starting index is grater then ending  but slice() cannot











