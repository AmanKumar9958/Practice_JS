//Two ways to declare - Literal and constructor
//Singleton - Made by using constructor.

//-----------Array and String Practice----------

// user = "Aman Kumar";
// console.log(user);
// id = 9958;
// // console.log(user.concat(id));
// username = user.concat(id);
// console.log(username);
// console.log(username.length);

// fruits = ["mango", "apple", "grapes", "guava"];
// console.log(fruits);
// console.log(fruits.length);
// fruits.push("orange");
// console.log(fruits);
// fruits.shift();
// console.log(fruits);

//-----------------------------------DAY - 1---------------------------------------------
//----------------Object Start-----------------


// declaring Symbol
const mySym = Symbol("mySymbol1");
// Object is key pair value
const JsUser = {
    name: "Aman",
    surname: "Kumar",
    age: 19,
    location: "Delhi",
    email: "amancollege04@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday", "Friday"],
    //Above all this can be accessed by using "."
    "full Name": "Aman Kumar",    //--->>To access these types of keys we have to use Square brackets

    [mySym]: "mySymbol1"    // --->> to access symbol write in square brackets..
}
// console.log(JsUser.name);
// console.log(JsUser.email);
// console.log(JsUser.age);
// console.log(JsUser.lastLoginDays);    // ---->> This is fine BUT..
// console.log(JsUser["name"]);          // ---->> This is the best way to print..
// console.log(JsUser[mySym]);
// console.log(JsUser["full Name"]);


JsUser.email = "bk70179@gmail.com";
// console.log(JsUser.email.concat(" -->>Changed Email"));
JsUser.name = "Gopal";
// console.log(JsUser);

// Object.freeze(JsUser);      //---->> Now we can't do any changes in the object
JsUser.name = "Aman";


//Using function with objects....

JsUser.greeting = function(){
    console.log("Hello JS User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);    //---->> Taking refrence from object
}
//Earlier we are getting error because we have freeze the objects..
// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());

//----------------------------------DAY - 2-----------------------------------------

const tinderUser = {}

tinderUser.name = "Aman Kumar";
tinderUser.id = "Aman9958";
tinderUser.isLoggedIn = true;

// console.log(tinderUser)

tinderUser.fullName = {             //Nested object
    firstName: "Gopal",
    lastName: "Kumar",
}
// console.log(tinderUser.fullName);
// console.log(tinderUser.fullName.firstName);
// console.log(tinderUser.isLoggedIn);

//MERGING TWO OR MORE OBJECTS IN ONE OBJECT
const obj1 = {
    a:1,
    b:2,
    c:3,
    d:4,
    e:5,
}
const obj2 = {
    1:"a",
    2:"b",
    3:"c",
    4:"d",
    5:"e",
}
const obj4 = {
    name: "Aman Kumar",
    age: 19,
    id: "Aman9958"
}
// console.log(obj1);
// const obj3 = Object.assign({}, obj1, obj2, obj4);     //For merging two or more objects..
// const obj3 = {...obj1, ...obj2, ...obj4}                 //Both ae same..
// console.log(obj3);


// console.log(Object.keys(tinderUser));                    //Returns all the KEYS..
// console.log(Object.values(tinderUser));                  //Returns all the VALUES..
// console.log(Object.entries(tinderUser));                 //Returns all the entries of the object..
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));    //Checks the key are available or not..

//----------------------------------DAY - 3-----------------------------------------

                            // object destructuring

const course = {
    courseName: "JS in Hindi",
    price: 500,
    instructor: "Hitesh"
}
// console.log(course.price);   //--->>NORMAL WAY TO PRINT

//DESTRUCTURING...
const {courseName} = course;
const {courseName: CN} = course;      //changing name
// console.log(courseName);       //--->>ANOTHER WAY TO PRINT
// console.log(CN);               //--->>ANOTHER WAY TO PRINT

                            //API

