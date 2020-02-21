for (var i= 1; i <=5; i++){
    var str = "";
    for (var j = 1; j<= i;j++){
        if (j==3) {
            str +=" * "
        
        } else{
            str  +=" "+j;
        }
    }
    console.log(str);
}