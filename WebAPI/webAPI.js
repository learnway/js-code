// Fetch API

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => console.log(data));  // fetches data from the API  (asynchronous)   (promise)   (then)   (fetch)   (API)


// Web Workers

let worker = new Worker("worker.js");   // "WebWorkers"

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

// Web Speech API

let speechSynthesis = window.speechSynthesis;  // "Web Speech API"   (speechSynthesis)   (window)   (SpeechSynthesis)

// Web Storage API

let localStorage = window.localStorage; // "Web Storage API"   (localStorage)   (window)   (Storage)

// Web Notifications API

let notification = new Notification("Hello, world!"); // "Web Notifications API"   (Notification)   (new Notification)

// Web Crypto API

let crypto = window.crypto;  // "Web Crypto API"   (crypto)   (window)   (Crypto)

// Web Geolocation API

let geolocation = navigator.geolocation;    // "Web Geolocation API"   (geolocation)   (navigator)   (Geolocation)

// Web Bluetooth API

let bluetooth = navigator.bluetooth;    // "Web Bluetooth API"   (bluetooth)   (navigator)   (Bluetooth)

// Web Share API

let shareData = {
    title: "Hello, world!",
    text: "This is a test message.",
    url: "https://example.com"
};

navigator.share(shareData)
    .then(() => console.log("Share completed successfully."))
    .catch((error) => console.log(`An error occurred: ${error.message}`));  // "Web Share API"   (shareData)   (navigator)   (share)   (then)   (catch)   (error)   (message)

// Web Push API (bluetooth) (navigator) (navigator)
// Web NFC API (bluetooth) (navigator) (navigator)
// Web MIDI API (bluetooth) (navigator) (navigator)
// Web USB API (bluetooth) (navigator) (navigator)
// Web Serial API (bluetooth) (navigator) (navigator)
// Web HID API (bluetooth) (navigator) (navigator)
// WebXR Device API (bluetooth) (navigator) (navigator)
// WebXR Gamepad API (bluetooth) (navigator) (navigator)
// WebXR Layers API (bluetooth) (navigator) (navigator)
// WebXR Session API (bluetooth) (navigator) (navigator)
// WebXR Input Profiles API (bluetooth) (navigator) (navigator)
// WebXR Hand Input API (bluetooth) (navigator) (navigator)
// WebXR DOM Overlays API (bluetooth) (navigator) (navigator)
// WebXR Hit Test API (bluetooth) (navigator) (navigator)
// WebXR Depth Sensing API (bluetooth) (navigator) (navigator)
// WebXR Anchors API (bluetooth) (navigator) (navigator)
// WebXR Plane Detection API (bluetooth) (navigator) (navigator)
// WebXR Image Tracking API (bluetooth) (navigator) (navigator)
// WebXR Light Estimation API (bluetooth) (navigator) (navigator)
// WebXR Hand Tracking API (bluetooth) (navigator) (navigator)
// WebXR Eye Tracking API (bluetooth) (navigator) (navigator)
// WebXR Face Tracking API (bluetooth) (navigator) (navigator)
// WebXR Depth API (bluetooth) (navigator) (navigator)
// WebXR Augmented Reality Module (bluetooth) (navigator) (navigator)
