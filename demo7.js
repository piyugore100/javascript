function even(arr) {
    return arr.filter(function (num) {
        return num % 2 == 0;
    })
} 

function odd(arr) {
    return arr.filter(function (num) {
        return num % 2 !== 0;
    })
} 

function min(arr) {
    arr.sort(function (a,b) { return a-b; })
    return arr[0];
}  

function max(arr) {
    arr.sort(function (a,b) { return b-a; })
    return arr[0];
}

 function sum(sum) {
     return arr.reduce(function (pre,num) {
         return pre + num;
     }, 0)
 }  



  

  function operation(nums,cmds) {
      var result = null; 
    

      for (var cmd of cmds) { 


          switch (cmd) {
              case "even": { result = even(result ==null ? nums : result); break; } 
              case "odd": { result = odd(result ==null ? nums : result); break; }
              case "min": { result = min(result ==null ? nums : result); break; }
              case "max": { result = max(result ==null ? nums : result); break; }
              case "sum": { result = sum(result ==null ? nums : result); break; }


          }
      } 
      return result;  
    }
      var nums = [1,2,3,4,5,6,7,8,9,10]

      var cmds = ["even","sum"];

      console.log(operation(nums,cmds));
    

  