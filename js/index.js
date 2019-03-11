// DECLARING VARIABLES 
// Declare variables that will
// store references for 
let btn = document.getElementById("collect");
// <input type="button" id="submit-button">,
let fn = document.getElementById("fullname");
// <input type="text" id="fullname">,
let email = document.getElementById("email");
// <input type="text" id="email">
let message = document.getElementById("message");
// <textarea id="message"></textarea>

let fm = document.querySelector("form");

function validateForm() {
    
    console.clear();
    
    let data = {};
    let errors = [];
    
    // FULL NAME HANDLED
    if (fn.value !== "") {
        data.fname = fn.value;
    } else {
        errors.push("Full name missing!");
    }
    
    
    // HANDLE THE EMAIL HERE
    if (email.value !== "") {
        data.email = email.value;
    } else {
        errors.push("Email is missing!");
    }
    
    
    // HANDLE THE MESSAGE HERE
    if (message.value !== "") {
        data.message = message.value;    
    } else {
        errors.push("Please type your message!")
    }
    
    
    // PRINTING FEEDBACK OR ERRORS
    if (errors.length === 0) {
        console.log(data);
        //clear text once submitted
        fm.reset();
    } else {
        console.log(errors);
    }
}

btn.addEventListener("click", validateForm);
