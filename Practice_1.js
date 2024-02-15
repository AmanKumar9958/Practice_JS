alert("Hello Aman")         //THIS IS USED FOR MAKING ALERT BOX (APPEAR ON STARING OF WEB PAGE)

// console.log("Hello, my name is Aman Kumar") //(THIS WILL SHOW THE TEXT IN THE CONSOLE SECTION IN INSPECT MENU)

//document.write("Hello again, my name is Aman Kumar")   //THIS IS USED TO PRINT THE TEXT ON THE WEB PAGE.

//var aman=("Hello the name of this variable is my name.");
//document.write(aman);

// const aman={
//     name:"Red Bulb",
//     price:"80",
//     company:"Syska",
//     warranty:"1 Year"
// }

var num= prompt("Enter Number");   //USED TO SHOW PROMPT ON SCREEN
if(num<0){
    document.write("It is a negative number");
}
else if(num==0){
    document.write("It is neither -ve nor +ve");
}
else{
    document.write("It is a positive number");
}