// Switch Statement
// The switch statement is used to perform different actions based on different conditions.


// #1 switch statement
// let day = "Monday";
// switch (day) {
//     case "Monday":
//         console.log("Today is Monday.");
//         break;
//     case "Tuesday":
//         console.log("Today is Tuesday.");
//         break;
//     case "Wednesday":
//         console.log("Today is Wednesday.");
//         break;
//     default:
//         console.log("Invalid day.");
// }


// #1 switch statement with getDay()
// The getDay() method returns the day of the week (0-6) for the specified date according to local time.
let day;
switch (new Date().getDay()){
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
    //     break;
    // default:
    //     day = "Invalid day";
}
console.log(day);




// #2 switch statement with fall-through
let fruit = "banana";
switch (fruit) {
    case "apple":
        console.log("You picked an apple.");
        break;
    case "banana":
        console.log("You picked a banana.");
        break;
    case "orange":
        console.log("You picked an orange.");
        break;
    default:
        console.log("You picked something else.");
}



// #3 switch statement with fall-through and no break
let color = "red";
switch (color) {
    case "red":
        console.log("You picked red.");
    case "blue":
        console.log("You picked blue.");
    case "green":
        console.log("You picked green.");
    default:
        console.log("You picked something else.");
}



