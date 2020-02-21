 //   class:-

//   class is model from which multiple  object can be created 

//   class is used to define the state and bhihavour of the object 

//   class is logical enity which represtes a category.a




//   object:-  

//   object is an instance of a class

//   the object have state and behaviour 


//   state->  state is cuurent values of the object which are stored useing intcance variables.

//   instance variables are the proparties  stored in the object.


//   behaviour ->   behaviour represtes the activites of the object which can be defined by useing methods.

//   ex:-

//   class dog{
//     //   steate 
//     name;
//     age;
//     height;
//     weight;
//     color;
//     price;
  

// //   behaviour
//   eating() {

//     hggffdss
 //   }
//    braking() {
//        hjklfd
//    } 
// } 

// // object:

// objects can be create in two wayes:-

// 1)  By useing object literal 

// {} -> object literal

// var preson = {
//     name:  "abc",
//     age : 10,
//     moblie : "1234567895",
// } 

// 2) By using 'new' keyword 

// var preson2 = new preson();  //here preson () is concutor function.



// create an object for dog 

// var dog = {
//     color: "black",
//     name:"tommy",
//     age:2,
//     price:1000,
//     weight:2,
// }


// define a concuter funcation to create object :-

// function Dog (name,color,age,w,height) { 
//     this.name = name;
//     this.color= color;
//     this.age = age;
//     this.wight =  w;
//     this.height = height;
// }


//  var dog1 = new Dog("tommy","red",2,10,15)

//  var dog2 = new Dog("manuu","white",2,10,15) 

//  var dog3 = new Dog()

//  console.log(dog1);
//  console.log(dog2);
//  console.log(dog3);


//  //why do we  required an object ?

//  // an object is used to store mulitple properties of an (ex, person,product,categores,ect.)

//  and to perform some opartion on those propreties using method .Dog

//  object helps to mange multiple entity in the proggram easily. 


//  what are the possibale values for an obejct property. 

//  string,
//  number,
//  boolean,
//  undefined,
//  Array,
//  obejct,
//  function 



var person = {
    name: "priya",
    age:21,
    isActive: true,
    PAN: undefined,
    moblie:["12345","12345678","987654334"],
    Address: {
        state: "pune",
        city: "mumbai",
        country: "india"

    },

    printProfile: function () {
        console.log("Name:",this.name);
        console.log("City:",this.city);

        console.log("Mobile:",this.moblie[0]);

    }
}

person.printProfile();






