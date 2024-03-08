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
    currMode2 = "dark";
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
    currMode2 = "light";
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

/* Menu Bar */

let header = document.querySelector("header");
let openMenu = document.querySelector(".menu-bar");
let closeMenu = document.querySelector(".menu-bar-rev");

openMenu.addEventListener("click",() => {
  header.classList.add("open");
});

closeMenu.addEventListener("click", () => {
  header.classList.remove("open");
});

let home = document.querySelector(".home1");
let skills = document.querySelector(".skills1");
let projects = document.querySelector(".projects1");
let contacts = document.querySelector(".contacts1");
let light = document.querySelector(".light1");
let sidebar = document.querySelector(".sidebar");
home.addEventListener("click", () => {
  header.classList.remove("open");
});
skills.addEventListener("click", () => {
  header.classList.remove("open");
});
projects.addEventListener("click", () => {
  header.classList.remove("open");
});
contacts.addEventListener("click", () => {
  header.classList.remove("open");
});
light.addEventListener("click", () => {
  header.classList.remove("open");
});

/*light mode from menu */

let mode2 = document.querySelector(".light1");
let currMode2 = "light";

mode2.addEventListener("click",() => {
  if(currMode2 === "light"){
    currMode2 = "dark";
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
    currMode = "dark";
    document.querySelector(".light1").innerHTML = "Dark Mode";
  }
  else{
    currMode2 = "light";
    document.querySelector("body").style.backgroundColor = "#fbeaeb";
    document.querySelector(".header").style.backgroundColor = "#2f3c7e";
    document.querySelector(".left-hello").style.color = "#f52549";
    document.querySelector(".main").style.color = "black";
    document.querySelector(".quote").style.color = "black";
    document.querySelector("hr").style.backgroundColor = "#2f3c7e";
    document.querySelector(".skills").style.color = "#2f3c7e";
    document.querySelector(".headingProjects").style.color = "#2f3c7e";
    document.querySelector("footer").style.backgroundColor = "#2f3c7e";
    document.querySelector(".outer-button").innerHTML = "Light Mode";
    currMode = "light";
    document.querySelector(".light1").innerHTML = "Light Mode";
  }
});




