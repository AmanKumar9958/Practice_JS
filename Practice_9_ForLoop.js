// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
// }

// for (let, phir startingPoint enter kro; condition enter kro; phir increase hoga ya phir decrease hoga use enter kro)
// for(let aman=6; aman<12; aman++){
//     console.log("Aman Kumar\n");
// }

// If length and index is same then it will become the infinite loop..

//Printing Table
function printtable(){
    let num = parseInt(prompt("Enter Number to print table.."));
    for(table=1; table<=10; table++){
    document.write(num + " x " + table + " = " + num*table + "<br>");
    }
}

//Printing Number
function printNum(){
    let num = parseInt(prompt("Enter the last number to print"));
    for(i=1; i<=num; i++){
    document.write(i, "<br>");
    }
}