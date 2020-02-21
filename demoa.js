 // var cities = ["pune","mumbai","delhi" ,"nashik"];

// for (var city of cities) {
//     console.log(city + " => " + city.length);
// } 

// console.log("*****forEach()******");

// cities.forEach(function(city) {
//     console.log(city + " => "+ city.length);
// })  


//  var nums = [];
// for (var city of cities) {
//      nums.push(city.length);
// } 

//  console.log(nums);  



// var nums = []; {
// console.log(city + " => " + city.length);
// }  

//   console.log("***forEach***");
//   cities.forEach(function(city) {
      
//   }

// var cities = ["pune","mumbai","delhi" ,"nashik"];

     
//  function map (cd) {
//      var arr = [4,6] 
//      for (var i = 0; i < cities.length; i++) 
//      { 
//          arr.push(cb (cities[i], i, cities));
//      }  
//      return arr;
//  }  

//      var arr = map (function (city) {

//     return city.length;
//   });   

//    var nums = cities.map (function(city) {
//        return city.length;
//    });   



//    uppercase:-   

//    var cities = ["pune", "mumbai", "delhi"]   
     
//  function map (callback) {
//      var arr = []; 
//      for (var i = 0; i < cities.length; i++) 
//      { 
//          arr.push(callback(cities[i], i, cities));
//      }  
//      return arr;
//  }  

//      var nums = cities.map (function (city) {

//     return city.toUpperCase;
//   });   

// console.log(nums);  




// var nums = [1,2,3,4,5,6,7,8,9,10] ;


//  nums .forEach (function (n,i,arr) {
    
//   arr[i] = arr[i] * arr[i];


    
// }) 

// console.log(nums);  




//    var nums = [1,2,3,4,5,6,7,8,9,10] ;


//  nums .map (function (n,i,arr) {
    
//   arr[i] = arr[i] * arr[i];


    
// }) 

// console.log(nums); 



// var nums = [1,2,3,4,5,6,7,8,9,10] ; 

// var evens =[];


// nums . forEach(function (n,i,arr) { 

//     if (n % 2 == 0)  evens.push(n);
   




   
// }) 

// console.log(evens);



// var nums = [1,2,3,4,5,6,7,8,9,10] ; 
   
// var evens = nums.filter(function (n,i,arr) { 

//     if (n % 2 == 0)  return n;   
// }) 

// console.log(evens);   



// last two values removing to pop use

// var cities = ["pune","satara","nashik","Nagpur"] ; 



// cities.pop(); 
// cities.pop();
// console.log(cities); 


// ex:-

// var  fruite = ["apple","mango","banana","painapple"];

//  fruite.pop();
//  fruite.pop();

//  console.log(fruite);






//  var ncities = cities.filter(function(city) {


   //  if (city.charAt(0) == "N" || city.charAt(0) == "n")  
    
    
    
//  })   



    
      
//  var cities = ["pune","nashik","Nagpur","satara"];

//  cities.forEach(function(city, i, cities){

//     var ch = city.charAt(0);
//     if (ch == 'N'|| ch == 'n')
//     {
//         cities.splice(i,1);
//     }
//  });
//    console.log(cities);


   
//    var cities = ["pune","nashik","Nagpur","satara"];

//   for (var i = 0; i < cities.length; i++) {

//     var ch = cities.charAt(0);
  //     if (ch == 'N'|| ch == 'n')
//     // {
        // cities.splice(i,1);
        // i--;
    // }
//  }
//    console.log(cities);  



// var nums = [1,2,3,4,5,6,7,8,9,10] ;  

// var sum = 0;

//   for (var  Element of nums)

// sum += parseInt(Element);

// console.log(sum);  


// var nums = [1,2,3,4,5,6,7,8,9,10];

// var sum = nums.reduce(function(sum,value,index,array) {

    // return sum+value ;

// },0);
//    console.log(sum);
    

// var nums = [1,2,3,4,5,6,7,8,9,10];

 
//  console.log(nums);

//  nums.reverse();

//  console.log(nums);

 
// var nums = [1,2,3,4,5,6,7,8,9,10]; 
 
// var alphas = ["a","B","D","C"];

// alphas.sort();

 
// console.log(alphas);  



// var nums = [1,200,3,4,5,6,7,8,9,10];

// nums.sort();

// console.log(nums);  



// var nums = [1,2,3,4,5,6,7,8,9,10];

// nums.sort (function(a,b) {
//     return a-b;
// // });
// //  console.log(nums[0]);  


//  var nums = [1,200,3,4,5,6,7,8,9,10]; 

//  function max (arr) {

//  arr.sort (function(a,b) {
//      return  b-a;
//  });
//   return arr[0];
// };
//  console.log(maxN=max(nums));   


// //  min 

// var nums = [1,200,3,4,5,6,7,8,9,10]; 

//  function min (arr) {

//  arr.sort (function(a,b) {
//      return  a-b;
//  });
//   return arr[0];
// };
//  console.log(minN=min(nums));    


//   even

// var nums = [1,2,3,4,5,6,7,8,9,10];

//   var evens = [];
    
// var  arr = nums.forEach (function(n, i, arr) {

// // if(n % 2 == 0)evens.push(n);
        
    
// // }); 
// //   console.log(evens);  




// // odd
//   nums = [1,2,3,4,5,6,7,8,9,10];

//   var odd = [];
    
// var  arr = nums.forEach (function(n, i, arr) {

// if(n % 2 !== 0)odd.push(n);
        
    
// });
//   console.log(odd);  




//    sum 


nums = [1,2,3,4,5,6,7,8,9,10];

var  sum = 0 ;

 for (var Element of nums) {

 sum += parseInt (Element);

}
  console.log (sum);    



  










 

  
  
      
  
     
    




 

  













