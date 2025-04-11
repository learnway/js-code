// Event handling

let button = document.querySelector("button");
button.addEventListener("click", () => {
    alert("Button clicked!");   // "Button clicked!"   (event)   (click)   (addEventListener)   (event listener)   (callback function)   (handler)
    event.preventDefault(); // prevents the default action of the event (e.g., opening a link in a new tab)
});  // "Button clicked!"   (event)   (click)   (addEventListener)   (event listener)   (callback function)   (handler)