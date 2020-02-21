//  var fruites = ["banana","orange","lemon","apple"];
//  var x = fruites.toString();
//  console.log(fruites); 



var numbers = [100,200,300,400,500];

function checkAdult(age) {

    return age >= 18;
} 

function myFunction() {
    console.log("demo"); 

    numbers   .filter(checkAdult);
    
}