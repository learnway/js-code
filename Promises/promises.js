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