"use strict"; 
let count; 
let lengthEl= document.getElementById("length-el");

const countEl = document.getElementById("count-el");

// Add event listener to get value via getNumber if the "Enter" button was pressed.
countEl.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        getNumber();
    }
});

function getNumber() {
    count = Number(countEl.value);
    // if (count < 0) {
    //     alert("Please type in positive values.")
    //     count = 0;
    //     console.log(`reset count to ${count}.`);
    //     countEl.textContent = 0;
    // } else {
    //     count = Number(countEl.value);
    //     console.log(`Postive value: ${count}`);
    //     console.log(typeof(count));
    // }    
    console.log(`After function call: ${count}`);
    console.log(typeof(count));
    unitConversions();
    

}  
console.log("Hello" + countEl.value);


// create function to call calculate unitconversions. 
function unitConversions() {
    // Unit Conversion for Length m/ft
    // const meterFormula=;
    lengthEl.textContent = `${count} meters = 65.616 feet | 20 feet = 6.096 meters.`;

}

// Formula for converting meter to feet. 
// Meter to feet 
// 1m = 3.28ft 
// Mulitply the number of meter by 3.28
// 
// Feet to meter
// 1f= 1m/3.28 = .304m
// xft * .304m 



// Task to do: 
// Get the value from the input
//  - **new** Add eventlistener to get value from input w/out the need for enter button.
// Check whether the value is actually an integer 
// Do calculations

// 28/4/2022
// What I've accomplished: 
// - Created button with onclick attr. w/ a function to get the number from
// the user when its clicked after they've typed the number in the input field.
// - Created function to collect and convert value from input to number.
// 

// 28/4/2022
// Task's left to do:
// Provide conversions formula 
// Reflect conversion result on the page through the id's i.e volume-el
// Is it possible to hide the values and then reveal it when clicked by the user ??
// 


// 5/2/2022
// What I've accomplished :
// - Added an eventlistener to the input field to get the values from the user
//   when the "Enter" button is clicked. Replacing the need for a button.
// 
// Task's left to do:
// Provide conversions formula 
// Reflect conversion result on the page through the id's i.e volume-el
// *Optional* Is it possible to hide the values and then reveal it when clicked by the user ??
// 
// 