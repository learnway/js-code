// Async/await

async function fetchData() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await response.json();
    console.log(data);
}
fetchData();  // fetches data from the API  (asynchronous)   (await)   (async)   (promise)
