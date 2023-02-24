const form = document.querySelector("form");
const fname = document.querySelector("input[name='fname']");
const lname = document.querySelector("input[name='lname']");
const email = document.querySelector("input[name='email']");
const password = document.querySelector("input[name='password']");
const fnameErr = document.querySelector("#form-fname");
const lnameErr = document.querySelector("#form-lname");
const emailErr = document.querySelector("#form-email");
const passwordErr = document.querySelector("#form-password");
const error = document.querySelectorAll(".error");

//See if input matches regEx for emails
const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

form.addEventListener("submit", (e) => {
    let messages = [];
    if (fname.value == '' || fname.value == null) {
        fnameErr.style.visibility = "visible"
        fname.classList.add("red");
    } 
    if (lname.value == '' || lname.value == null) {
        lnameErr.style.visibility = "visible"
        lname.classList.add("red");
    }
    if (email.value == '' || email.value == null || email.value !== regEx) {
        emailErr.style.visibility = "visible"
        email.classList.add("red");
    }
    if (password.value == '' || password <= 6) {
        passwordErr.style.visibility = "visible"
        password.classList.add("red");
    }
    e.preventDefault();
});


