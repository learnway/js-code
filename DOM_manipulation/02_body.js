// document.createElement("html");

// document.createElement("body");

// append body element to html element
// document.querySelector("html").appendChild(document.createElement("body"));
// <html><body></body></html>  // append body element to html element

// create div element
document.createElement("div");
// append div element to body element
document.body.appendChild(document.createElement("div")); // <body><div></div></body>
// add id in to div element
document.querySelector("div").setAttribute("id", "myDiv");
// <body><div id="myDiv"></div></body>

// add style in to div element
document.querySelector("div").setAttribute("style", "background-color: red;");
// <body><div style="background-color: red;"></div></body>

// 1. way to add style in to div element
document.querySelector("div").style.fontSize = "35px";
// 2.way to add style in to id attribute
document.getElementById("myDiv").style.color = "blue";

// add class in to div element
document.querySelector("div").setAttribute("class", "myClass");
// <body><div class="myClass"></div></body>

// add text in to div element
document.querySelector("div").textContent = "Hello, world!";
