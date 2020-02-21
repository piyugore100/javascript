var rows = 5;
var cols = rows * 2;




for (var i =1; i<=rows;i++){
   var str = " ";
    for (var j = 1; j<= cols;j++){
        if (j <=rows - i||j>=rows+i){
            str +="  "
        
        } else{
            str +=" *";
        }
    }
    console.log(str);
}



for (var i =rows; i>=0;i--){
    var str = " ";
    for (var j = 1; j<= cols;j++){
        if (j <=rows - i||j>=rows+i){
            str +="  "
        
        } else{
            str +=" *";
        }
    }
    console.log(str);
}