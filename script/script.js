// requirements
// username must have 5-12 characters
// email must be in proper formate
// password min-8 max-16

'use strict;'

//elements selection
//inputs
const formEl = document.getElementById('form')
const userNameEl = document.getElementById('username');
const emailEl = document.getElementById('email');
const passwordEl = document.getElementById('password');
//btn
const submitBtn = document.getElementById('submit-btn');


//function
const init = () => { }

function isValidEmail(email) {
    var pattern = /^[\w.-]+@[\w.-]+\.\w+$/;
    return pattern.test(email);
    // test() method is a function available in JavaScript that is used to check whether a given string matches a specified regex pattern.
}

//events
// // if we done the eventlistener with form element we have to provide submit
// formEl.addEventListener('submit', (event) => {
//     console.log(event.preventDefault())
// })

// // if we done the eventlistener with submit btn element we have to provide click
submitBtn.addEventListener('click', (event) => {
    event.preventDefault()

    // //with element (name).value ===> this is to get a value of an inputs 
    const userName = userNameEl.value.trim();
    const email = emailEl.value.trim();
    const password = passwordEl.value.trim();

    if (!userName) {
        console.error("UserName is mandatory");
    } else if (userName.length < 5) {
        console.warn("Username length is not enough")
    } else if (userName.length > 12) {
        console.warn("Username length is not contains more than 12 characters")
    }

    if (!email) {
        console.error("Email is mandatory");
    } else if (isValidEmail(email)) {
        console.warn("Your email is not valid!")
    }

    if (!password) {
        console.error("Password is mandatory");
    } else if (password.length < 8) {
        console.warn("password length is not enough")
    } else if (password.length > 18) {
        console.warn("password length is not contains more than 16 characters")
    }

    console.table({
        userName: userName,
        email: email,
        password: password
    })
})

//initial settings
init()