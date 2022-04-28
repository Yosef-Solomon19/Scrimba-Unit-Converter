"use strict"; 

// Formula for converting meter to feet. 
// Meter to feet 
// 1m = 3.28ft 
// Mulitply the number of meter by 3.28
// 
// Feet to meter
// 1f= 1m/3.28 = .304m
// xft * .304m 

let count; 
let lengthEl= document.getElementById("length-el");

const countEl = document.getElementById("count-el");

function getNumber() {
    count = Number(countEl.value);
    if (count < 0) {
        alert("Please type in positive values.")
        count = 0;
        console.log(`reset count to ${count}.`);
        countEl.textContent = 0;
    } else {
        console.log(`Postive value: ${count}`);
        console.log(typeof(count));

    }
    
    // console.log(countEl.value);
    // console.log(typeof(countEl.value));

    // count = Number(countEl.value);
    console.log(`Check count: ${count}.`);
    console.log(typeof(count));

    // console.log(typeof(countEl));
    // console.log(countEl.value)
    // console.log(typeof(countEl.value));
    // lengthEl.textContent = Number(countEl.value) + 1 ;    
    
}  
console.log("Hello" + countEl.value);



// Task to do: 
// Get the value from the input
// Check whether the value is actually an integer 
// Do calculations