let button = document.querySelector(".b1");
let currMode = "light";

button.addEventListener("click",() => { 
    if(currMode === "light"){
        currMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
        document.querySelector("h1").style.color = "white";
    }
    else{
        currMode = "light";
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector("h1").style.color = "black";
    }
});
