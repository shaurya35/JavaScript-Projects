/* Navigation Bar */

console.log("Script Running");
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-105px";
  }
  prevScrollpos = currentScrollPos;
}

/* Mode-Switch */

let mode = document.querySelector(".mode-changer");
let currMode = "light";

mode.addEventListener("click",() => {
  if(currMode === "light"){
    currMode = "dark";
    document.querySelector("body").style.backgroundColor = "#232946";
    document.querySelector(".header").style.backgroundColor = "#232946";
    document.querySelector(".main").style.color = "#b8c1ec";
    document.querySelector(".left-hello").style.color = "#fffffe";
    document.querySelector(".quote").style.color = "#b8c1ec";
    document.querySelector("hr").style.backgroundColor = "#fffffe";
    document.querySelector(".skills").style.color = "#eebbc3";
    document.querySelector(".headingProjects").style.color = "#eebbc3";
    document.querySelector("footer").style.backgroundColor = "#232946";
    document.querySelector(".outer-button").innerHTML = "Dark Mode";
  }
  else{
    currMode = "light";
    document.querySelector("body").style.backgroundColor = "#fbeaeb";document.querySelector(".header").style.backgroundColor = "#2f3c7e";
    document.querySelector(".left-hello").style.color = "#f52549";
    document.querySelector(".main").style.color = "black";
    document.querySelector(".quote").style.color = "black";
    document.querySelector("hr").style.backgroundColor = "#2f3c7e";
    document.querySelector(".skills").style.color = "#2f3c7e";
    document.querySelector(".headingProjects").style.color = "#2f3c7e";
    document.querySelector("footer").style.backgroundColor = "#2f3c7e";
    document.querySelector(".outer-button").innerHTML = "Light Mode";
  }
});


