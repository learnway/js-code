// # First method of dom manipulation output with addEventListener

// document.addEventListener("DOMContentLoaded", function() {
//     document.querySelector("div").textContent = "Hello, world!";
//     console.log(document.querySelector("div").textContent); // Hello, world!
// });



// # Second method of dom manipulation output with JSDOM
// Running DOM manipulation code directly in Node.js is not possible because Node.js does not have a built-in DOM. However, you can use a library like jsdom to simulate a DOM environment in Node.js.

// Install jsdom using npm: // npm install jsdom
// const { JSDOM } = require("jsdom");

// Create a new JSDOM instance
// const dom = new JSDOM(`<!DOCTYPE html><div></div>`);

// Get the document from the JSDOM instance
// const document = dom.window.document;

// Your DOM manipulation code
// document.querySelector("div").textContent = "Hello, world!";
// console.log(document.querySelector("div").textContent); // Hello, world!

// Run the > node code_test.js



// # Third method
//document.createElement("h1"); // <h1></h1>    // create h1 element
//document.write("h1he");     // h1he    // write h1he to document



// #
// let heading = document.createElement("h1"); // "h1" (DOM) (document) (element) (node) (createElement)
// heading.textContent = "Hello, world!";
// console.log(heading.textContent); // Hello, world!



// #
// let paragraph = document.createElement("p");
// paragraph.textContent = "This is a paragraph.";
// paragraph.appendChild(document.createTextNode("This is a paragraph2.")); // This is a paragraph.
// console.log(paragraph.textContent); // This is a paragraph.



// #
// let div = document.createElement("div");
// div.setAttribute("id", "myDiv");
// div.setAttribute("class", "myDiv");
// console.log(div.getAttribute("id")); // myDiv
// console.log(div.getAttribute("class")); // myDiv




// create html document
document.createElement("html"); // <html></html>    // create html document

// create head element
document.createElement("head"); // <head></head>    // create head element

// create body element
document.createElement("body"); // <body></body>    // create body element

// create title element
document.createElement("title"); // <title></title>    // create title element

// append title element to head element
document.querySelector("head").appendChild(document.createElement("title")); // <head><title></title></head>    // append title element to head element

// append head element to html document
document.querySelector("html").appendChild(document.createElement("head")); // <html><head><title></title></head></html>    // append head element to html document

// append body element to html document
document.querySelector("html").appendChild(document.createElement("body")); // <html><head><title></title></head><body></body></html>    // append body element to html document

// How many types are create html elements
// 1. create html element
document.createElement("html"); // <html></html>    // create html element

// append html element to body element
document.body.appendChild(document.createElement("html")); // <body><html></html></body>    // append html element to body element


// How many types are create body elements
// 1. create body element
document.body; // <body></body>    // create body element

// 2. create body element
document.createElement("body"); // <body></body>    // create body element

// How many types are create div elements
// 1. create div element
document.createElement("div"); // <div></div>    // create div element

// append div element to body element
document.body.appendChild(document.createElement("div")); // <body><div></div></body>

// How many types are create p elements
// 1. create p element
document.createElement("p"); // <p></p>    // create p element

// append p element to body element
document.body.appendChild(document.createElement("p")); // <body><p></p></body>    // append p element to body element

// How many types are create h1 elements
// 1. create h1 element
document.createElement("h1"); // <h1></h1>    // create h1 element

// append h1 element to body element
document.body.appendChild(document.createElement("h1")); // <body><h1></h1></body>    // append h1 element to body element

// How many types are create h2 elements
// 1. create h2 element
document.createElement("h2"); // <h2></h2>    // create h2 element

// append h2 element to body element
document.body.appendChild(document.createElement("h2")); // <body><h2></h2></body>    // append h2 element to body element


// 1. create body element
document.body; // <body></body>    // create body element
document.body.innerHTML; // ""    // get body element's innerHTML
document.body.textContent; // ""    // get body element's textContent


// 2. create body element
document.createElement("body"); // <body></body>    // create body element

// set body element's innerHTML
document.body.innerHTML = "<h1>Hello, world!</h1><p>This is a paragraph.</p>"; // <body><h1>Hello, world!</h1><p>This is a paragraph.</p></body>    // set body element's innerHTML

// set body element's textContent
document.body.textContent = "<h1>Hello, world!</h1><p>This is a paragraph.</p>"; // <body><h1>Hello, world!</h1><p>This is a paragraph.</p></body>    // set body element's textContent

// create div element
document.createElement("div"); // <div></div>    // create div element

// append div element to body element
document.body.appendChild(document.createElement("div")); // <body><div></div></body>    // append div element to body element

// create button element
document.createElement("button"); // <button></button>    // create button element

// set button element's textContent
document.querySelector("button").textContent = "Click me!"; // <button>Click me!</button>    // set button element's textContent

// append button element to body element
document.body.appendChild(document.querySelector("button")); // <body><button>Click me!</button></body>    // append button element to body element

// create image element
document.createElement("img"); // <img></img>    // create image element

// set image element's src attribute
document.querySelector("img").setAttribute("src", "https://example.com/image.jpg"); // <img src="https://example.com/image.jpg"></img>    // set image element's src attribute

// append image element to body element
document.body.appendChild(document.querySelector("img")); // <body><img src="https://example.com/image.jpg"></img></body>    // append image element to body element







// create heading element
document.createElement("h1"); // <h1></h1>    // create heading element
document.createElement("p"); // <p></p>    // create paragraph element

// create text node
document.createTextNode("Hello, world!"); // "Hello, world!"    // create text node
document.createTextNode("This is a paragraph."); // "This is a paragraph."    // create text node

// append text node to heading element
document.querySelector("h1").appendChild(document.createTextNode("Hello, world!")); // <h1>Hello, world!</h1>    // append text node to heading element

// append text node to paragraph element
document.querySelector("p").appendChild(document.createTextNode("This is a paragraph.")); // <p>This is a paragraph.</p>    // append text node to paragraph element

// create link element
document.createElement("a"); // <a></a>    // create link element
document.createElement("img"); // <img></img>    // create image element

// set link element's attributes
document.querySelector("a").setAttribute("href", "https://example.com"); // <a href="https://example.com"></a>    // set link element's href attribute
document.querySelector("img").setAttribute("src", "https://example.com/image.jpg"); // <img src="https://example.com/image.jpg"></img>    // set image element's src attribute

// create event listener
document.querySelector("button").addEventListener("click", () => { // <button></button>    // create button element
    alert("Button clicked!"); // "Button clicked!"    // create event listener
});

// create form element
document.createElement("form"); // <form></form>    // create form element

// create input element
document.createElement("input"); // <input></input>    // create input element
document.querySelector("input").setAttribute("type", "text"); // <input type="text"></input>    // set input element's type attribute

// create option element
document.createElement("option"); // <option></option>    // create option element
document.querySelector("option").setAttribute("value", "1"); // <option value="1"></option>    // set option element's value attribute



// Create a div element
var div = document.createElement("div");
div.style.fontSize = "35px";
div.style.color = "red";
div.style.backgroundColor = "yellow";
// div.textContent = "Styled text"; // Add text content

div.textContent = window.innerWidth + "px" + "<br>" + window.innerHeight + "px"; // 800px 600px  // get window size()
window.resizeTo(800, 600); // set window size`s width and height

// Append the div element to the body
document.body.appendChild(div);