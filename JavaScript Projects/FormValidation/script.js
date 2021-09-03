function validate() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm_password").value;

    checkUsername(username)
    checkEmail(email)
    checkPassword(password)
    checkPasswordsMatch(password, confirmPassword)
}

function checkUsername(username) { 
    if (username.length > 7){
        document.getElementById("username").classList.replace('error', 'success')
        document.getElementById("username").classList.add("success")
        document.getElementById('username_error').innerHTML=""
    } else {
        document.getElementById("username").classList.add('error')
        document.getElementById('username_error').innerHTML="The username must be 8 letters long"
    }
}

function checkEmail(email) { 
    if (email.length > 7 && email.includes('@') ){
        document.getElementById("email").classList.replace('error', 'success')
        document.getElementById("email").classList.add("success")
        document.getElementById('email_error').innerHTML=""
    } else {
        document.getElementById("email").classList.add('error')
        document.getElementById('email_error').innerHTML="The email must be 8 letters long and include @"
    }
}

function checkPassword(password) { 
    const checker = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (password.match(checker)){
        document.getElementById("password").classList.replace('error', 'success')
        document.getElementById("password").classList.add("success")
        document.getElementById('password_error').innerHTML=""
    } else {
        document.getElementById("password").classList.add('error')
        document.getElementById('password_error').innerHTML="The password must be 8 letters long, and include a number."
    }
}

function checkPasswordsMatch(password, confirmPassword) { 
    if (confirmPassword === password){
        document.getElementById("confirm_password").classList.replace('error', 'success')
        document.getElementById("confirm_password").classList.add("success")
        document.getElementById('confirmPassword_error').innerHTML=""
    } else {
        document.getElementById("confirm_password").classList.add('error')
        document.getElementById('confirmPassword_error').innerHTML="This password must match the previously entered password."
    }
}