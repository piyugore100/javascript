//  var name = "Topper skills";

//  substr(starindex,numberOfcharacters)-> return a substring strating from starIndex till  the size equals to numberOfcharacters

//  console.log(name.substr(3));
//  console.log(name.substr(3,3)); 


// find a number of time a sub string is requied in a string?

// Examples:-

var str ="abcjjjjabcjjjjabc";

var sstr = "abc";

var counter=0;

for (var i= 0; i <=str.length-sstr.length; i++)
{
    var s =  str.substring(i,sstr.length);
    
    if (str.substr(i,sstr.length))
        
        counter++;

    }

    


    console.log("total="+counter);