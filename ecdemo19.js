// Destrusuring 

// const nums = [10,20,30,40,50,60];
// const a = nums[0]
// const b = nums[1]
// const c = nums[2]

// console.log(a, b, c); 

// const nums = [10];



// object desturing:-


// const person = {
//     name: "priya",
//     mobile: "91234567456",
//     email: "piyu@123.com", 
//     city: "pune"
// } 

// const name = person.name;
// const city = person.city;
// const phone = person.mobile;

// console.log(name,city,phone); 

//  object desturning 

// variable name must be same as object property name 

// const { name, city,mobile: phone } = person;
// console.log(name, city, phone);








// function  print({name,mobile,city}) {
//     console.log(name,mobile,city);
// }

// const person = {
//     name: "piyusha",
//     mobile: "1234567",
//     city: "mumbai"
// }
//   print(person);



// sepred oprator 


// const nums = [10,20,30,40,50,60,70,80,90];

// console.log(nums);
// console.log(...nums); 



const nums = [10,20,30,40,50,60,70,80,90];

// const newArr = [100,200,...nums]


// console.log(newArr); 




function print(a, b, c, d){
    console.log(a, b, c, d)
} 

print(...nums)