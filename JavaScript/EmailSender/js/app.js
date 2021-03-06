// variables
const sendBtn = document.getElementById('sendBtn'),
      email = document.getElementById('email'),
      subject = document.getElementById('subject'),
      message = document.getElementById('message'),
      resetBtn = document.getElementById('resetBtn'),
      sendEmailForm = document.getElementById('email-form')


// event listeners

eventListeners()

function eventListeners() {
    // add init
    document.addEventListener('DOMContentLoaded', appInit)

    // validate the forms
    email.addEventListener('blur', validateField)
    subject.addEventListener('blur', validateField)
    message.addEventListener('blur', validateField)
    
    // send email and reset button
    sendEmailForm.addEventListener('submit', sendEmail)
    resetBtn.addEventListener('click', resetForm)
}


// functions

// app initilization
function appInit() {
    // disable button on load
    sendBtn.disabled = true
}

function sendEmail(e) {
    e.preventDefault()

    // show the spinner
    const spinner = document.getElementById('spinner')
    spinner.style.display = 'block'

    // show the image
    const sendEmailImg = document.createElement('img')
    sendEmailImg.src = 'img/mail.gif'
    sendEmailImg.style.display = 'block'

    // hide the spinner then show email image
    setTimeout(function() {
        spinner.style.display = 'none'

        // show the image
        document.querySelector('#loaders').appendChild(sendEmailImg)

        // after 5 seconds hide
        setTimeout(function() {
            sendEmailForm.reset();
            sendEmailImg.remove()
        }, 5000)
    }, 3000)
}

// validate the fields
function validateField() {
    let errors;

    // validate the length of the field
    // this = lines 18-20
    validateLength(this)

    if (this.type === 'email') {
        validateEmail(this)
    }

    // both will return errors then check if there're any errors
    errors = document.querySelectorAll('.error')

    // check that the inputs are validate
    if (email.value !== '' && subject.value !== '' && message.value !== '') {
        if (errors.length === 0) {
            //the button should be enabled
            sendBtn.disabled = false
        } 
    }
}

// validate the length of the fields 
function validateLength(field) {
    if(field.value.length > 0) {
        field.style.borderBottomColor = 'green'
        field.classList.remove('error')
    } else {
        field.style.borderBottomColor = 'red'
        field.classList.add('error')
    }
}

// validate the email field and check for the @
function validateEmail(field) {
    let emailText = field.value

    // check if the emailText contains the @ sign
    if(emailText.indexOf('@') !== -1) {
        field.style.borderBottomColor = 'green'
        field.classList.remove('error')
    } else {
        field.style.borderBottomColor = 'red'
        field.classList.add('error')
    }
}

// reset the form
function resetForm() {
    sendEmailForm.reset();
    const mail = document.getElementById('mail')
    mail.style.display = 'none'
}