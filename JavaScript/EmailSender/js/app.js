// variables
const sendBtn = document.getElementById('sendBtn'),
      email = document.getElementById('email'),
      subject = document.getElementById('subject'),
      message = document.getElementById('message')



// event listeners

eventListeners()

function eventListeners() {
    // add init
    document.addEventListener('DOMContentLoaded', appInit)

    // validate the forms
    email.addEventListener('blur', validateField)
    subject.addEventListener('blur', validateField)
    message.addEventListener('blur', validateField)
}


// functions

// app initilization
function appInit() {
    // disable button on load
    sendBtn.disabled = true
}

// validate the fields
function validateField() {
    console.log('From validateField')
}