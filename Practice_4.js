
// In this practice_4, I have practiced If Else condition...

alert("Welcome, please enter your age to check if you're eligible to drive or not..")
var age = prompt("Enter your age");

if (age<=10) {
    document.write("You are kid");
}
else if (age>=11 && age<=17){
    document.write("You are teenager");
}
else if (age==18) {
    document.write("You can drive, but for safety you should wait for 1 more year, till then you can apply for Learning License");
}
else{
    document.write("You can drive.")
}

