import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Main.css";

function Main() {
  //four hooks for the four validation inputs
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //four hooks for the four possible errors
  const [errorUsername, setErrorUsername] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  //four hooks for the form styling
  const [usernameColor, setUsernameColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");
  const [confirmPasswordColor, setConfirmPasswordColor] = useState("");

  function validate() {
      validateUsername()
      validateEmail()
      validatePassword()
      validateConfirmPassword()
  }

  function validateUsername() {
    if (username.length > 8) {
        setErrorUsername('')
        setUsernameColor("green")
    } else {
        setErrorUsername('Username must be 8 letters long')
        setUsernameColor("red")
    }
  }

  function validateEmail() {
    if (email.length > 8 || email.includes("@")) {
        setErrorEmail('')
        setEmailColor("green")
    } else {
        setErrorEmail('Email must be greater than 8 letters long and include @')
        setEmailColor("red")
    }   
  }

  function validatePassword() {
    const checker = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (password.match(checker)) {
        setErrorPassword('')
        setPasswordColor("green")
    } else {
        setErrorPassword('Password must include a number, symbol, and a capital letter')
        setPasswordColor("red")
    }   
  }

  function validateConfirmPassword() {
    if (password === confirmPassword && confirmPassword !== '') {
        setErrorConfirmPassword('')
        setConfirmPasswordColor("green")
    } else {
        setErrorConfirmPassword('This password must match the previously entered password')
        setConfirmPasswordColor("red")
    }   
  }

  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <h1>Form Validation</h1>
        {/* to connect the hooks and these forms, add them accordingly */}
        <input
          type="text"
          placeholder="username"
          className="form-control"
          style={{borderColor:usernameColor}}
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <small>{errorUsername}</small>
        <input
          type="text"
          placeholder="email"
          className="form-control"
          style={{borderColor:emailColor}}

          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <small>{errorEmail}</small>

        <input
          type="text"
          placeholder="password"
          className="form-control"
          style={{borderColor:passwordColor}}

          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <small>{errorPassword}</small>

        <input
          type="text"
          placeholder="confirm password"
          className="form-control"
          style={{borderColor:confirmPasswordColor}}
          value={confirmPassword}
          onChange={(event) => {
            setConfirmPassword(event.target.value);
          }}
        />
        <small>{errorConfirmPassword}</small>

        <br />
        <button className="btn btn-success" onClick={validate}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Main;
