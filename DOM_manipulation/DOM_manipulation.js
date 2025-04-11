// DOM manipulation

let heading = document.createElement("h1"); // "h1" (DOM) (document) (element)  (node) (createElement)
heading.textContent = "Hello, world!";  
document.body.appendChild(heading);  // "Hello, world!" (DOM) (document) (element)  (node) (appendChild) (textContent) (createElement)



let paragraph = document.createElement("p");    // "p" (DOM) (document) (element)  (node) (createElement)
paragraph.textContent = "This is a paragraph.";
document.body.appendChild(paragraph);  // "This is a paragraph." (DOM) (document) (element)  (node) (appendChild) (textContent) (createElement)



let link = document.createElement("a"); // "a" (DOM) (document) (element)  (node) (createElement)
link.setAttribute("href", "https://www.example.com"); // "https://www.example.com" (DOM) (document) (element)  (node) (setAttribute) (href)
link.href = "https://www.example.com"; // "https://www.example.com" (DOM) (document) (element)  (node) (setAttribute) (href)
link.textContent = "Click here to visit example.com"; // "Click here to visit example.com" (DOM) (document) (element)  (node) (textContent) (createElement)
document.body.appendChild(link); // "Click here to visit example.com" (DOM) (document) (element)  (node) (appendChild) (textContent) (createElement)



let image = document.createElement("img");  // "img" (DOM) (document) (element)  (node) (createElement)
image.setAttribute("src", "https://example.com/image.jpg"); // "https://example.com/image.jpg" (DOM) (document) (element)  (node) (setAttribute) (src)
image.src = "https://example.com/image.jpg"; // "https://example.com/image.jpg" (DOM) (document) (element)  (node) (setAttribute) (src)
document.body.appendChild(image); // "https://example.com/image.jpg" (DOM) (document) (element)  (node) (appendChild) (src) (createElement)



let button = document.createElement("button");  // "button" (DOM) (document) (element)  (node) (createElement)
button.textContent = "Click me!"; // "Click me!" (DOM) (document) (element)  (node) (textContent) (createElement)
document.body.appendChild(button); // "Click me!" (DOM) (document) (element)  (node) (appendChild) (textContent) (createElement)



button.addEventListener("click", () => { // "click" (DOM) (document) (element)  (node) (addEventListener) (event listener) (callback function) (handler)
    alert("Button clicked!"); // "Button clicked!" (DOM) (document) (element)  (node) (addEventListener) (event listener) (callback function) (handler)
}); // "click" (DOM) (document) (element)  (node) (addEventListener) (event listener) (callback function) (handler)



let formx = document.createElement("formx");  // "form" (DOM) (document) (element)  (node) (createElement)
document.body.appendChild(formx); // "form" (DOM) (document) (element)  (node) (appendChild) (createElement)



let input = document.createElement("input"); // "input" (DOM) (document) (element)  (node) (createElement)
input.setAttribute("type", "text"); // "text" (DOM) (document) (element)  (node) (setAttribute) (type)
input.type = "text"; // "text" (DOM) (document) (element)  (node) (setAttribute) (type) 
form.appendChild(input); // "text" (DOM) (document) (element)  (node) (appendChild) (type) (createElement)



let textareax = document.createElement("textareax"); // "textarea" (DOM) (document) (element)  (node) (createElement) 
form.appendChild(textareax); // "textarea" (DOM) (document) (element)  (node) (appendChild) (createElement)



submitButton.textContent = "Submit"; // "Submit" (DOM) (document) (element)  (node) (textContent) (createElement) 
form.appendChild(submitButton); // "Submit" (DOM) (document) (element)  (node) (appendChild) (textContent) (createElement)



submitButton.addEventListener("click", () => { // "click" (DOM) (document) (element)  (node) (addEventListener) (event listener) (callback function) (handler)
    alert("Form submitted!"); // "Form submitted!" (DOM) (document) (element)  (node) (addEventListener) (event listener) (callback function) (handler)
}); // "click" (DOM) (document) (element)  (node) (addEventListener) (event listener) (callback function) (handler)

let div = document.createElement("div"); // "div" (DOM) (document) (element)  (node) (createElement)
document.body.appendChild(div); // "div" (DOM) (document) (element)  (node) (appendChild) (createElement)

let list = document.createElement("ul"); // "ul" (DOM) (document) (element)  (node) (createElement)
document.body.appendChild(list); // "ul" (DOM) (document) (element)  (node) (appendChild) (createElement)

let listItem = document.createElement("li"); // "li" (DOM) (document) (element)  (node) (createElement)
listItem.textContent = "Item 1"; // "Item 1" (DOM) (document) (element)  (node) (textContent) (createElement)
list.appendChild(listItem); // "Item 1" (DOM) (document) (element)  (node) (appendChild) (textContent) (createElement)

listItem = document.createElement("li"); // "li" (DOM) (document) (element)  (node) (createElement)
listItem.textContent = "Item 2"; // "Item 2" (DOM) (document) (element)  (node) (textContent) (createElement)
list.appendChild(listItem); // "Item 2" (DOM) (document) (element)  (node) (appendChild) (textContent) (createElement)

listItem = document.createElement("li"); // "li" (DOM) (document) (element)  (node) (createElement)
listItem.textContent = "Item 3"; // "Item 3" (DOM) (document) (element)  (node) (textContent) (createElement)
list.appendChild(listItem); // "Item 3" (DOM) (document) (element)  (node) (appendChild) (textContent) (createElement)

let table = document.createElement("table"); // "table" (DOM) (document) (element)  (node) (createElement)
document.body.appendChild(table); // "table" (DOM) (document) (element)  (node) (appendChild) (createElement)

let row = document.createElement("tr"); // "tr" (DOM) (document) (element)  (node) (createElement)
table.appendChild(row); // "tr" (DOM) (document) (element)  (node) (appendChild) (createElement)

let cell = document.createElement("td"); // "td" (DOM) (document) (element)  (node) (createElement)
cell.textContent = "Cell 1"; // "Cell 1" (DOM) (document) (element)  (node) (textContent) (createElement)
row.appendChild(cell); // "Cell 1" (DOM) (document) (element)  (node) (appendChild) (textContent) (createElement)

cell = document.createElement("td"); // "td" (DOM) (document) (element)  (node) (createElement)
cell.textContent = "Cell 2"; // "Cell 2" (DOM) (document) (element)  (node) (textContent) (createElement)
row.appendChild(cell); // "Cell 2" (DOM) (document) (element)  (node) (appendChild) (textContent) (createElement)

cell = document.createElement("td"); // "td" (DOM) (document) (element)  (node) (createElement)
cell.textContent = "Cell 3"; // "Cell 3" (DOM) (document) (element)  (node) (textContent) (createElement)
row.appendChild(cell); // "Cell 3" (DOM) (document) (element)  (node) (appendChild) (textContent) (createElement)

row = document.createElement("tr"); // "tr" (DOM) (document) (element)  (node) (createElement)
table.appendChild(row); // "tr" (DOM) (document) (element)  (node) (appendChild) (createElement)

cell = document.createElement("td"); // "td" (DOM) (document) (element)  (node) (createElement)
cell.textContent = "Cell 4"; // "Cell 4" (DOM) (document) (element)  (node) (textContent) (createElement)
row.appendChild(cell); // "Cell 4" (DOM) (document) (element)  (node) (appendChild) (textContent) (createElement)

cell = document.createElement("td"); // "td" (DOM) (document) (element)  (node) (createElement)
cell.textContent = "Cell 5"; // "Cell 5" (DOM) (document) (element)  (node) (textContent) (createElement)
row.appendChild(cell); // "Cell 5" (DOM) (document) (element)  (node) (appendChild) (textContent) (createElement)

cell = document.createElement("td"); // "td" (DOM) (document) (element)  (node) (createElement)
cell.textContent = "Cell 6"; // "Cell 6" (DOM) (document) (element)  (node) (textContent) (createElement)
row.appendChild(cell); // "Cell 6" (DOM) (document) (element)  (node) (appendChild) (textContent) (createElement)

let image = document.createElement("img"); // "img" (DOM) (document) (element)  (node) (createElement)  
image.setAttribute("src", "https://example.com/image.jpg"); // "https://example.com/image.jpg" (DOM) (document) (element)  (node) (setAttribute) (src)
document.body.appendChild(image); // "https://example.com/image.jpg" (DOM) (document) (element)  (node) (appendChild) (src) (createElement) 

let link = document.createElement("a"); // "a" (DOM) (document) (element)  (node) (createElement)
link.setAttribute("href", "https://example.com"); // "https://example.com" (DOM) (document) (element)  (node) (setAttribute) (href)
link.href = "https://example.com"; // "https://example.com" (DOM) (document) (element)  (node) (setAttribute) (href)
link.textContent = "Click here"; // "Click here" (DOM) (document) (element)  (node) (textContent) (createElement)
document.body.appendChild(link); // "Click here" (DOM) (document) (element)  (node) (appendChild) (textContent) (createElement)

let video = document.createElement("video"); // "video" (DOM) (document) (element)  (node) (createElement)
video.setAttribute("src", "https://example.com/video.mp4"); // "https://example.com/video.mp4" (DOM) (document) (element)  (node) (setAttribute) (src)
video.src = "https://example.com/video.mp4"; // "https://example.com/video.mp4" (DOM) (document) (element)  (node) (setAttribute) (src)
document.body.appendChild(video); // "https://example.com/video.mp4" (DOM) (document) (element)  (node) (appendChild) (src) (createElement)

let audio = document.createElement("audio"); // "audio" (DOM) (document) (element)  (node) (createElement)
audio.setAttribute("src", "https://example.com/audio.mp3"); // "https://example.com/audio.mp3" (DOM) (document) (element)  (node) (setAttribute) (src)
audio.src = "https://example.com/audio.mp3"; // "https://example.com/audio.mp3" (DOM) (document) (element)  (node) (setAttribute) (src) 
document.body.appendChild(audio); // "https://example.com/audio.mp3" (DOM) (document) (element)  (node) (appendChild) (src) (createElement)

let iframe = document.createElement("iframe"); // "iframe" (DOM) (document) (element)  (node) (createElement)
iframe.setAttribute("src", "https://example.com"); // "https://example.com" (DOM) (document) (element)  (node) (setAttribute) (src)
iframe.src = "https://example.com"; // "https://example.com" (DOM) (document) (element)  (node) (setAttribute) (src)
document.body.appendChild(iframe); // "https://example.com" (DOM) (document) (element)  (node) (appendChild) (src) (createElement)

let canvas = document.createElement("canvas"); // "canvas" (DOM) (document) (element)  (node) (createElement)   
canvas.setAttribute("width", "300"); // "300" (DOM) (document) (element)  (node) (setAttribute) (width)
canvas.width = 300; // "300" (DOM) (document) (element)  (node) (setAttribute) (width)
canvas.setAttribute("height", "200"); // "200" (DOM) (document) (element)  (node) (setAttribute) (height)
canvas.height = 200; // "200" (DOM) (document) (element)  (node) (setAttribute) (height)
document.body.appendChild(canvas); // "300x200" (DOM) (document) (element)  (node) (appendChild) (width) (height) (createElement)

let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg"); // "svg" (DOM) (document) (element)  (node) (createElementNS) (http://www.w3.org/2000/svg) (createElementNS)
svg.setAttribute("width", "300"); // "300" (DOM) (document) (element)  (node) (setAttribute) (width)
svg.width = 300; // "300" (DOM) (document) (element)  (node) (setAttribute) (width)
svg.setAttribute("height", "200"); // "200" (DOM) (document) (element)  (node) (setAttribute) (height)
svg.height = 200; // "200" (DOM) (document) (element)  (node) (setAttribute) (height)
document.body.appendChild(svg); // "300x200" (DOM) (document) (element)  (node) (appendChild) (width) (height) (createElementNS)

let form = document.createElement("form"); // "form" (DOM) (document) (element)  (node) (createElement)
form.setAttribute("action", "https://example.com"); // "https://example.com" (DOM) (document) (element)  (node) (setAttribute) (action)
form.action = "https://example.com"; // "https://example.com" (DOM) (document) (element)  (node) (setAttribute) (action)
document.body.appendChild(form); // "https://example.com" (DOM) (document) (element)  (node) (appendChild) (action) (createElement)

let input = document.createElement("input"); // "input" (DOM) (document) (element)  (node) (createElement)
input.setAttribute("type", "text"); // "text" (DOM) (document) (element)  (node) (setAttribute) (type)
input.type = "text"; // "text" (DOM) (document) (element)  (node) (setAttribute) (type) 
form.appendChild(input); // "text" (DOM) (document) (element)  (node) (appendChild) (type) (createElement)

let textarea = document.createElement("textarea"); // "textarea" (DOM) (document) (element)  (node) (createElement)
textarea.setAttribute("rows", "4"); // "4" (DOM) (document) (element)  (node) (setAttribute) (rows)
textarea.rows = 4; // "4" (DOM) (document) (element)  (node) (setAttribute) (rows)
form.appendChild(textarea); // "4" (DOM) (document) (element)  (node) (appendChild) (rows) (createElement)

let button = document.createElement("button"); // "button" (DOM) (document) (element)  (node) (createElement)
button.setAttribute("type", "submit"); // "submit" (DOM) (document) (element)  (node) (setAttribute) (type)
button.type = "submit"; // "submit" (DOM) (document) (element)  (node) (setAttribute) (type)
form.appendChild(button); // "submit" (DOM) (document) (element)  (node) (appendChild) (type) (createElement)

let select = document.createElement("select"); // "select" (DOM) (document) (element)  (node) (createElement)
form.appendChild(select); // "select" (DOM) (document) (element)  (node) (appendChild) (createElement)

let option1 = document.createElement("option"); // "option" (DOM) (document) (element)  (node) (createElement)
option1.setAttribute("value", "option1"); // "option1" (DOM) (document) (element)  (node) (setAttribute) (value)
option1.value = "option1"; // "option1" (DOM) (document) (element)  (node) (setAttribute) (value)
select.appendChild(option1); // "option1" (DOM) (document) (element)  (node) (appendChild) (value) (createElement)

let option2 = document.createElement("option"); // "option" (DOM) (document) (element)  (node) (createElement)
option2.setAttribute("value", "option2"); // "option2" (DOM) (document) (element)  (node) (setAttribute) (value)
option2.value = "option2"; // "option2" (DOM) (document) (element)  (node) (setAttribute) (value)
select.appendChild(option2); // "option2" (DOM) (document) (element)  (node) (appendChild) (value) (createElement)

let optgroup = document.createElement("optgroup"); // "optgroup" (DOM) (document) (element)  (node) (createElement)
optgroup.setAttribute("label", "Options"); // "Options" (DOM) (document) (element)  (node) (setAttribute) (label)
optgroup.label = "Options"; // "Options" (DOM) (document) (element)  (node) (setAttribute) (label)
select.appendChild(optgroup); // "Options" (DOM) (document) (element)  (node) (appendChild) (label) (createElement)

let label = document.createElement("label"); // "label" (DOM) (document) (element)  (node) (createElement)
label.setAttribute("for", "checkbox"); // "checkbox" (DOM) (document) (element)  (node) (setAttribute) (for)
label.htmlFor = "checkbox"; // "checkbox" (DOM) (document) (element)  (node) (setAttribute) (for)
form.appendChild(label); // "checkbox" (DOM) (document) (element)  (node) (appendChild) (for) (createElement)

let checkbox = document.createElement("input"); // "input" (DOM) (document) (element)  (node) (createElement)
checkbox.setAttribute("type", "checkbox"); // "checkbox" (DOM) (document) (element)  (node) (setAttribute) (type)
checkbox.type = "checkbox"; // "checkbox" (DOM) (document) (element)  (node) (setAttribute) (type)
form.appendChild(checkbox); // "checkbox" (DOM) (document) (element)  (node) (appendChild) (type) (createElement)

let label2 = document.createElement("label"); // "label" (DOM) (document) (element)  (node) (createElement)
label2.setAttribute("for", "radio"); // "radio" (DOM) (document) (element)  (node) (setAttribute) (for)
label2.htmlFor = "radio"; // "radio" (DOM) (document) (element)  (node) (setAttribute) (for)
form.appendChild(label2); // "radio" (DOM) (document) (element)  (node) (appendChild) (for) (createElement)

let radio = document.createElement("input"); // "input" (DOM) (document) (element)  (node) (createElement)
radio.setAttribute("type", "radio"); // "radio" (DOM) (document) (element)  (node) (setAttribute) (type)
radio.type = "radio"; // "radio" (DOM) (document) (element)  (node) (setAttribute) (type)
form.appendChild(radio); // "radio" (DOM) (document) (element)  (node) (appendChild) (type) (createElement)

let label3 = document.createElement("label"); // "label" (DOM) (document) (element)  (node) (createElement)
label3.setAttribute("for", "file"); // "file" (DOM) (document) (element)  (node) (setAttribute) (for)
label3.htmlFor = "file"; // "file" (DOM) (document) (element)  (node) (setAttribute) (for)
form.appendChild(label3); // "file" (DOM) (document) (element)  (node) (appendChild) (for) (createElement)

let file = document.createElement("input"); // "input" (DOM) (document) (element)  (node) (createElement)
file.setAttribute("type", "file"); // "file" (DOM) (document) (element)  (node) (setAttribute) (type)
file.type = "file"; // "file" (DOM) (document) (element)  (node) (setAttribute) (type)
form.appendChild(file); // "file" (DOM) (document) (element)  (node) (appendChild) (type) (createElement)


document.body.appendChild(form); // "form" (DOM) (document) (element)  (node) (appendChild) (action) (createElement) (input) (textarea) (button) (select) (option) (optgroup) (label) (input) (label) (input) (label) (input)

console.log(svg.innerHTML); // "<svg width=\"300\" height=\"200\"></svg>" (DOM) (document) (element)  (node) (innerHTML)

// SVG manipulations

let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle"); // "circle" (DOM) (document) (element)  (node) (createElementNS) (http://www.w3.org/2000/svg) (createElementNS)

circle.setAttribute("cx", "150"); // "150" (DOM) (document) (element)  (node) (setAttribute) (cx)
circle.setAttribute("cy", "100"); // "100" (DOM) (document) (element)  (node) (setAttribute) (cy)
circle.setAttribute("r", "50"); // "50" (DOM) (document) (element)  (node) (setAttribute) (r)
circle.setAttribute("fill", "red"); // "red" (DOM) (document) (element)  (node) (setAttribute) (fill)
svg.appendChild(circle); // "red" (DOM) (document) (element)  (node) (appendChild) (fill) (createElementNS) (http://www.w3.org/2000/svg) (createElementNS) (circle) (setAttribute) (cx) (setAttribute) (cy) (setAttribute) (r) (setAttribute) (fill)

let rect = document.createElementNS("http://www.w3.org/2000/svg", "rect"); // "rect" (DOM) (document) (element)  (node) (createElementNS) (http://www.w3.org/2000/svg) (createElementNS)
rect.setAttribute("x", "50"); // "50" (DOM) (document) (element)  (node) (setAttribute) (x)
rect.setAttribute("y", "50"); // "50" (DOM) (document) (element)  (node) (setAttribute) (y)
rect.setAttribute("width", "100"); // "100" (DOM) (document) (element)  (node) (setAttribute) (width)
rect.setAttribute("height", "100"); // "100" (DOM) (document) (element)  (node) (setAttribute) (height)
rect.setAttribute("fill", "green"); // "green" (DOM) (document) (element)  (node) (setAttribute) (fill)
svg.appendChild(rect); // "green" (DOM) (document) (element)  (node) (appendChild) (fill) (createElementNS) (http://www.w3.org/2000/svg) (createElementNS) (rect) (setAttribute) (x) (setAttribute) (y) (setAttribute) (width) (setAttribute) (height)

let line = document.createElementNS("http://www.w3.org/2000/svg", "line"); // "line" (DOM) (document) (element)  (node) (createElementNS) (http://www.w3.org/2000/svg) (createElementNS)
line.setAttribute("x1", "100"); // "100" (DOM) (document) (element)  (node) (setAttribute) (x1)
line.setAttribute("y1", "100"); // "100" (DOM) (document) (element)  (node) (setAttribute) (y1)
line.setAttribute("x2", "200"); // "200" (DOM) (document) (element)  (node) (setAttribute) (x2)
line.setAttribute("y2", "200"); // "200" (DOM) (document) (element)  (node) (setAttribute) (y2)
line.setAttribute("stroke", "blue"); // "blue" (DOM) (document) (element)  (node) (setAttribute) (stroke)
line.setAttribute("stroke-width", "2"); // "2" (DOM) (document) (element)  (node) (setAttribute) (stroke-width)

svg.appendChild(line); // "blue" (DOM) (document) (element)  (node) (appendChild) (stroke) (createElementNS) (http://www.w3.org/2000/svg) (createElementNS) (line) (setAttribute) (x1) (setAttribute) (y1) (setAttribute) (x2) (setAttribute) (y2) (setAttribute) (stroke-width)

let text = document.createElementNS("http://www.w3.org/2000/svg", "text"); // "text" (DOM) (document) (element)  (node) (createElementNS) (http://www.w3.org/2000/svg) (createElementNS)
text.setAttribute("x", "150"); // "150" (DOM) (document) (element)  (node) (setAttribute) (x)
text.setAttribute("y", "150"); // "150" (DOM) (document) (element)  (node) (setAttribute) (y)
text.setAttribute("fill", "black"); // "black" (DOM) (document) (element)  (node) (setAttribute) (fill)
text.setAttribute("font-size", "24"); // "24" (DOM) (document) (element)  (node) (setAttribute) (font-size)
text.setAttribute("text-anchor", "middle"); // "middle" (DOM) (document) (element)  (node) (setAttribute) (text-anchor)
text.setAttribute("alignment-baseline", "middle"); // "middle" (DOM) (document) (element)  (node) (setAttribute) (alignment-baseline)
text.textContent = "Hello, SVG!"; // "Hello, SVG!" (DOM) (document) (element)  (node) (textContent) (createElementNS) (http://www.w3.org/2000/svg) (createElementNS) (text) (setAttribute) (x) (setAttribute) (y) (setAttribute) (fill) (setAttribute) (font-size) (setAttribute) (text-anchor) (setAttribute) (alignment-baseline)

svg.appendChild(text); // "Hello, SVG!" (DOM) (document) (element)  (node) (appendChild) (fill) (createElementNS) (http://www.w3.org/2000/svg) (createElementNS) (text) (setAttribute) (x) (setAttribute) (y) (setAttribute) (fill) (setAttribute) (font-size) (setAttribute) (text-anchor) (setAttribute) (alignment-baseline) (textContent)

// Event listeners

circle.addEventListener("click", function() {
    console.log("Circle clicked!");
});

rect.addEventListener("dblclick", function() {
    console.log("Rectangle double-clicked!");
});

line.addEventListener("mouseover", function() {
    this.setAttribute("stroke", "yellow");
});

line.addEventListener("mouseout", function() {
    this.setAttribute("stroke", "blue");
});

text.addEventListener("contextmenu", function(e) {
    e.preventDefault();
    console.log("Text context menu clicked!");
});

// File upload

file.addEventListener("change", function() {
    let fileInput = this;
    let file = fileInput.files[0];

    let reader = new FileReader();
    reader.onload = function(e) {
        let img = document.createElement("img");
        img.src = e.target.result;
        svg.appendChild(img);
    };

    reader.readAsDataURL(file);
});

// Form submission

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);
});

// Document ready

document.addEventListener("DOMContentLoaded", function() {
    console.log("Document ready!");
}); // "DOMContentLoaded" (DOM) (document) (element)  (node) (addEventListener) (event listener) (callback function) (handler)

// Window resize

window.addEventListener("resize", function() {  // "resize" (DOM) (document) (element)  (node) (addEventListener) (event listener) (callback function) (handler)
    console.log("Window resized!");
}); // "resize" (DOM) (document) (element)  (node) (addEventListener) (event listener) (callback function) (handler)

// Window scroll

window.addEventListener("scroll", function() {  // "scroll" (DOM) (document) (element)  (node) (addEventListener) (event listener) (callback function) (handler)
    console.log("Window scrolled!");
}); // "scroll" (DOM) (document) (element)  (node) (addEventListener) (event listener) (callback function) (handler)

// Keyboard events

document.addEventListener("keydown", function(e) { // "keydown" (DOM) (document) (element)  (node) (addEventListener) (event listener) (callback function) (handler)
    console.log(`Key down: ${e.key}`);
}); // "keydown" (DOM) (document) (element)  (node) (addEventListener) (event listener) (callback function) (handler)

document.addEventListener("keyup", function(e) { // "keyup" (DOM) (document) (element)  (node) (addEventListener) (event listener) (callback function) (handler)
    console.log(`Key up: ${e.key}`);
}); // "keyup" (DOM) (document) (element)  (node) (addEventListener) (event listener) (callback function) (handler)

document.addEventListener("keypress", function(e) { // "keypress" (DOM) (document) (element)  (node) (addEventListener) (event listener) (callback function) (handler)
    console.log(`Key press: ${e.key}`);
}); // "keypress" (DOM) (document) (element)  (node) (addEventListener) (event listener) (callback function) (handler)

// Mouse events

document.addEventListener("mousemove", function(e) { // "mousemove" (DOM) (document) (element)  (node) (addEventListener) (event listener) (callback function) (handler)
    console.log(`Mouse move: ${e.clientX}, ${e.clientY}`);
}); // "mousemove" (DOM) (document) (element)  (node) (addEventListener) (event listener) (callback function) (handler)

document.addEventListener("mousedown", function(e) { // "mousedown" (DOM) (document) (element)  (node) (addEventListener) (event listener) (callback function) (handler)
    console.log(`Mouse down: ${e.clientX}, ${e.clientY}`);
}); // "mousedown" (DOM) (document) (element)  (node) (addEventListener) (event listener) (callback function) (handler)

document.addEventListener("mouseup", function(e) { // "mouseup" (DOM) (document) (element)  (node) (addEventListener) (event listener) (callback function) (handler)
    console.log(`Mouse up: ${e.clientX}, ${e.clientY}`);
}); // "mouseup" (DOM) (document) (element)  (node) (addEventListener) (event listener) (callback function) (handler)

// Touch events

document.addEventListener("touchstart", function(e) { // "touchstart" (DOM) (document) (element)  (node) (addEventListener) (event listener) (callback function) (handler)
    console.log(`Touch start: ${e.touches[0].clientX}, ${e.touches[0].clientY}`);
}); // "touchstart" (DOM) (document) (element)  (node) (addEventListener) (event listener) (callback function) (handler)

document.addEventListener("touchmove", function(e) { // "touchmove" (DOM) (document) (element)  (node) (addEventListener) (event listener) (callback function) (handler)
    console.log(`Touch move: ${e.touches[0].clientX}, ${e.touches[0].clientY}`);
}); // "touchmove" (DOM) (document) (element)  (node) (addEventListener) (event listener) (callback function) (handler)

document.addEventListener("touchend", function(e) { // "touchend" (DOM) (document) (element)  (node) (addEventListener) (event listener) (callback function) (handler)
    console.log(`Touch end: ${e.changedTouches[0].clientX}, ${e.changedTouches[0].clientY}`);
}); // "touchend" (DOM) (document) (element)  (node) (addEventListener) (event listener) (callback function) (handler)

document.addEventListener("touchcancel", function(e) { // "touchcancel" (DOM) (document) (element)  (node) (addEventListener) (event listener) (callback function) (handler)
    console.log(`Touch cancel: ${e.changedTouches[0].clientX}, ${e.changedTouches[0].clientY}`);
}); // "touchcancel" (DOM) (document) (element)  (node) (addEventListener) (event listener) (callback function) (handler)

// Accessibility events

document.addEventListener("focus", function(e) { // "focus" (DOM) (document) (element)  (node) (addEventListener) (event listener) (callback function) (handler)
    console.log(`Focus: ${e.target.id}`);
}); // "focus" (DOM) (document) (element)  (node) (addEventListener) (event listener) (callback function) (handler)