for (var i= 1; i <=5; i++){
    var str = "";
    for (var j = 1; j<= i;j++){
        if (j> i -1){
            str +="*"
        
        } else{
            str  +=" "+j;
        }
    }
    console.log(str);
}