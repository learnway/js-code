// Create a div element
const div = document.createElement("div");
div.style.fontSize = "35px";
div.style.color = "red";
div.style.backgroundColor = "yellow";
div.textContent = "Styled text"; // Add text content



// 
div.setAttribute("id", "myDx"); // Add id attribute
document.body.appendChild(div); // Append the div element to the body
document.getElementById("myDx").innerHTML = "Browser inner window width:" + window.innerWidth + "px <br/>" + "Browser inner window height: " + window.innerHeight + "px";


// window.open() - open a new window
const window = document.createElement("window");
window.open("https://www.google.com", "_blank"); // Open a new window with Google

// Create a new div element and append it to the body
const div2 = document.createElement("div");
document.body.appendChild(div2);

// Set the id attribute of the div element
div2.id = "myDx2"; // Using property instead of setAttribute

// Open a new window with Google's website
window.open("https://www.google.com", "_blank");

// Update the text content of the div element
div2.textContent = "New window opened"; // Using textContent instead of innerHTML


// window.close() - close the current window
window.close(); // Close the current window
