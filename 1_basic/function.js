// Functions

function add(a, b) {
    return a + b;
}       // function declaration declaration
console.log(add(1, 2)); // 3    (function call)    (function invocation)    (function execution)

function subtract(a, b) {
    return a - b;   // return statement
}       // function declaration expression

let result = subtract(5, 3); // 2    (function call)    (function invocation)    (function execution)
console.log(result); // 2   (function call)    (function invocation)    (function execution)

// Arrow functions

let multiply = (a, b) => a * b; // function expression
console.log(multiply(3, 5)); // 15    (function call)    (function invocation)    (function execution)

// Template literals

let namee = "John";
let agee = 30;
let message = `My name is ${namee} and I am ${agee} years old.`;
console.log(message); // "My name is John and I am 30 years old."   (string interpolation)    (string concatenation)

// Destructuring

let obj2 = {
    name: "John",
    age: 30
};
let { name, age } = obj2;   // object destructuring
console.log(name); // "John"
console.log(age); // 30 years old   person.age

let arr2 = [1, 2, 3];
let [a, b, c] = arr2;   // array destructuring
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3    (array element)   (array item)  (array value)

// Promises

let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve("Success!");
    } else {
        reject("Error!");
    }
});
promise.then((message) => {
    console.log(message);
}).catch((message) => {
    console.log(message);
});  // "Success!"   (promise)   (resolve)   (then)   (catch)

// Async/await

async function fetchData() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await response.json();
    console.log(data);
}
fetchData();  // fetches data from the API  (asynchronous)   (await)   (async)   (promise)

// Generators

function* generateNumbers() {
    yield 1;
    yield 2;
    yield 3;
}
let generator = generateNumbers();  // generator function
console.log(generator.next().value); // 1    (generator)   (generator function)   (generator object)
console.log(generator.next().value); // 2
console.log(generator.next().value); // 3   (generator)   (generator function)   (generator object)

// Modules

import { add, subtract } from "./math.js";   // import statement
console.log(add(1, 2)); // 3
console.log(subtract(5, 3)); // 2   (import)   (export)   (module)   (ES6 module)

// Classes  and functions

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}
let person = new Person("John", 30);
console.log(person.greet()); // "Hello, my name is John and I am 30 years old."   (class)   (constructor)   (method)   (property)   (instance)   (object)

function greet(name, age) {
    return `Hello, my name is ${name} and I am ${age} years old.`;
}
console.log(greet("John", 30)); // "Hello, my name is John and I am 30 years old."   (function)   (parameter)   (argument)   (return value)

// Error handling

try {
    throw new Error("Oops! Something went wrong.");
} catch (error) {
    console.log(error.message); // "Oops! Something went wrong."   (try)   (catch)   (throw)   (error)   (exception)   (error handling)
}

// Regular expressions

let pattern = /hello/;  // regular expression
let text = "Hello, world!";
let match = text.match(pattern);
console.log(match); // ["hello"]   (regular expression)   (pattern)   (match)   (search)   (find)   (replace)   (test)

// DOM manipulation

let heading = document.createElement("h1");
heading.textContent = "Hello, world!";
document.body.appendChild(heading);  // "Hello, world!"   (DOM)   (document)   (element)   (node)   (appendChild)   (textContent)   (createElement)

// Event handling

let button = document.querySelector("button");
button.addEventListener("click", () => {
    alert("Button clicked!");   // "Button clicked!"   (event)   (click)   (addEventListener)   (event listener)   (callback function)   (handler)
    event.preventDefault(); // prevents the default action of the event (e.g., opening a link in a new tab)
});  // "Button clicked!"   (event)   (click)   (addEventListener)   (event listener)   (callback function)   (handler)

// Fetch API

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => console.log(data));  // fetches data from the API  (asynchronous)   (promise)   (then)   (fetch)   (API)

// Async/await

async function fetchData() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await response.json();
    console.log(data);
}
fetchData();  // fetches data from the API  (asynchronous)   (await)   (async)   (promise)

// Websockets

let socket = new WebSocket("ws://localhost:8080");
socket.onopen = () => {
    console.log("Connected to the server.");
};
socket.onmessage = (event) => {
    console.log(event.data);
};
socket.onerror = (error) => {
    console.log(error.message);
};  // "Connected to the server."   (Websockets)   (socket)   (onopen)   (onmessage)   (onerror)   (event)   (message)   (error)

// WebRTC

let peerConnection = new RTCPeerConnection();
peerConnection.onicecandidate = (event) => {
    if (event.candidate) {
        console.log(event.candidate);
    }
};  // "RTCPeerConnection"   (WebRTC)   (peerConnection)   (onicecandidate)   (event)   (candidate)

// WebAssembly

let module = new WebAssembly.Module(Uint8Array.from([0x0, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00]));
let instance = new WebAssembly.Instance(module);    // "WebAssembly"   (module)   (instance)   (WebAssembly.Module)   (WebAssembly.Instance)

// WebGL

let canvas = document.getElementById("canvas");
let gl = canvas.getContext("webgl");    // "WebGL"   (canvas)   (getContext)   (webgl)   (WebGLRenderingContext)

// Web Workers

let worker = new Worker("worker.js");   // "WebWorkers"   (worker)   (Worker)   (worker.js)

// Service Workers

let serviceWorker = navigator.serviceWorker;   // "ServiceWorkers"   (serviceWorker)   (navigator)   (ServiceWorker)

// IndexedDB

let db = indexedDB.open("MyDatabase", 1);
db.onupgradeneeded = (event) => {
    let db = event.target.result;
    let objectStore = db.createObjectStore("myObjectStore", { keyPath: "id" });
};  // "IndexedDB"   (db)   (indexedDB)   (objectStore)   (createObjectStore)   (onupgradeneeded)   (event)   (target)   (result)   (keyPath)

// Web Audio API

let audioContext = new AudioContext();  // "Web Audio API"   (audioContext)   (AudioContext)

// WebRTC Data Channels

let dataChannell = peerConnection.createDataChannel("myChannell");   // "WebRTC Data Channels"   (dataChannel)   (peerConnection)   (createDataChannel)

// WebRTC RTCPeerConnection

let peerConnection = new RTCPeerConnection();   // "WebRTC RTCPeerConnection"   (peerConnection)   (RTCPeerConnection)

// WebRTC RTCDataChannel

let dataChannel = peerConnection.createDataChannel("myChannel");   // "WebRTC RTCDataChannel"   (dataChannel)   (peerConnection)   (createDataChannel)

// WebRTC RTCIceCandidate

let iceCandidate = new RTCIceCandidate();   // "WebRTC RTCIceCandidate"   (iceCandidate)   (RTCIceCandidate)

// WebRTC RTCSessionDescription

let sessionDescription = new RTCSessionDescription();   // "WebRTC RTCSessionDescription"   (sessionDescription)   (RTCSessionDescription)

// WebRTC RTCPeerConnectionIceEvent

let iceEvent = new RTCPeerConnectionIceEvent();    // "WebRTC RTCPeerConnectionIceEvent"   (iceEvent)   (RTCPeerConnectionIceEvent)

// WebRTC RTCDataChannelEvent

let dataChannelEvent = new RTCDataChannelEvent();   // "WebRTC RTCDataChannelEvent"   (dataChannelEvent)   (RTCDataChannelEvent)

// WebRTC RTCPeerConnectionIceErrorEvent

let iceErrorEvent = new RTCPeerConnectionIceErrorEvent();   // "WebRTC RTCPeerConnectionIceErrorEvent"   (iceErrorEvent)   (RTCPeerConnectionIceErrorEvent)