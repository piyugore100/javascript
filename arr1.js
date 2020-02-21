 var arr = [
     [],
     [],
     []
 ]

 for(var i = 0; i < 3; i++) {
     for (var j = 0; j < 3; j++) {
        //  arr[i][j] = 10+10*(3*i+j);

        arr[i][j] = 10*((j+1)+(i*3)); 
         

        

         

     }
 }  


   console.log(arr);