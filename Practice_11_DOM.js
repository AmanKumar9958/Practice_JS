//DOM stands for Document Object Model...
//DOM is used for changing the elements and HTML..

//SELECTION in DOM....
var name = document.querySelector("#home"); //Always store it in any variable..

//CSS CHANGE in DOM...
name.style.color = "red";                   //Variable name is used..
name.style.backgroundColor = "yellow";      //Always follow camelCase..

//HTML CHANGE in DOM..
name.innerHTML = <sub>Hello</sub>;          //#home mai jo bhi tag hoga uski place pe ab yeh wale tags show krenge..
name.innerHTML = <b>hey kaise ho</b>;

//TEXT CHANGE in DOM...
name.textContent = "Kaise ho";

//Adding EVENT lISTENER..
name.addEventListener('mouseenter', function(){
    name.style.color ="red";
})
name.addEventListener('mouseleave', function(){
    name.style.backgroundColor = "green";
})

//click
//mouseenter
//mouseleave
