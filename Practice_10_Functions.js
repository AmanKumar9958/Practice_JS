//----------------------------------DAY - 1------------------------------------
function sayMyName(){
    console.log("A");
    console.log("M");
    console.log("A");
    console.log("N");
}
// sayMyName();

// function add(num1, num2){               //num1 and num2 are called parameters
//     console.log(num1 + num2);
// }
// add(3,4)                              //3 and 4 are called arguements..


// function addition(num1, num2){
//     let result = num1 + num2;
//     return result;
// }
// const result = addition(2,4)
// console.log("Result:",result);


// function greetingMessage(username){
//     return `${username} Just Logged in`
// }
// console.log(greetingMessage("Aman"));
// console.log(greetingMessage("Gopal"));



function welcomeGreeting(name = "Aman"){
    if(name === undefined){
        console.log("Please enter your name");
        return;
    }
    return `Good Morning ${name}`;
}
// console.log(welcomeGreeting());
// console.log(welcomeGreeting("Aman"));

//----------------------------------DAY - 2------------------------------------

// function calculateCartPrice(num1){                   //Only first value print..
    // return num1;
// }
// console.log(calculateCartPrice(200, 400, 500));     //Only first value print..

function calculateCartPrice(...price){                //Using 3 dots helps to print all value
    return price;
}
// console.log(calculateCartPrice(200, 400, 500, 100, 450));      //Now we can print all the values in the form of ARRAY.
// console.log(calculateCartPrice(200, 400, 300, 100, 450).length);
// console.log(calculateCartPrice(200, 400, 300, 100, 450).pop());
// console.log(calculateCartPrice(200, 400, 300, 100, 450).sort());


const user1 = {                      //Calling object in function
    username: "Aman Kumar",             
    price: 999,
}

function handleObject(userNumber){
    console.log(`Username is ${userNumber.username} and total amount is ${userNumber.price}`);
}
handleObject(user1);