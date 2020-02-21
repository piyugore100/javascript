// Array 
//  the Array is a grup of consective memry block each block uniqly indentifyed within the aary by a number called 
//   as  index 

//   javascript is dynamic lanuage so aary automatically grows as needed. 

//   In jaVASCRIPT aary can store diffrnt type of values. 


//   Array declration :
//    syntax 
//    var arryName=[] 

//    EX 

//    cities[0] = "pune";
//    cities[1] = "pune"; 


//    Arry declration can  initlization :  

//    var cities = ["pune","mumabi","nashik", 10, true] 

//    cities[10] = "nagpur" 
//    cities[cities.length] = "nagpur" 

//    console.log(cities.length);

//    console.log(cities);  



// var cities = ["pune","mumabi","nashik", 10, true] 
 
// console.log(typeof cities);  
// console.log(cities.pop());  
// console.log(cities);
// console.log(cities.shift());
// console.log(cities);   

// cities.splice(4,1);
// console.log(cities);
// cities.splice(1, 0, "nagar","kolhapur");  
// cities.splice(1, 1);

// console.log(cities);


// cities[1] = "replaced";
// console.log(cities);
// type of aary is an object  :-


// aary are  stored in the HEAP memory   


// Adding  elemnt is an Array 

// "cities[cities.length] = "shirdi"

// push(elemnt) -> add an  elemnt at the an aary  and return aary size after aadtion 

// cities.push("shirdi"); 
// cities.pop("shirdi");  

// unshift (Element)   add an elemnt at the start of an aary return aary size after aadtion     


// console.log(cities.unshift("shirampur")); 


// Remove Element form Array:-


// Pop() ->  removes and return last elemnt of an Array 

// shift() ->  remoes anf return first elemnt from an Array 





// console.log(cities);



    // splice(index,numberOfElementTostring, valesInsert1,  ValidityStateN) 




// var nums = [10,20,30,40,50,60,70];

// for (var i = 0; i < nums.length; i++) {
//     console.log(nums[i]);
// }   



// for in -> iterate and returns index for all element of an Array 


// for (var j in nums) {
//     console.log(nums[j]);
// }    

//  for of -> return an elemnt of the aary 


// for (var num of nums) {
//     console.log(num);
// }  

var nums = [10,20,30,40,50,60,70];


nums.forEach(); 

 nums.forEach(function(elemnt,index,aary)) {

    console.log(index +"-"+ element);

}