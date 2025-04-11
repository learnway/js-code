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