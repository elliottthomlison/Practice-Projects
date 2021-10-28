import React, { useState } from 'react';
import Button from '../Button/Button';
import Card from '../UI/Card';
import classes from './AddUser.module.css'

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault(); 
        // these are the cases we want to prevent (an empty field and an age < 1)
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
           return;
        } 
        // the '+' before 'enteredAge' is to allow for the type conversion and comparison between a number and string
        if (+enteredAge < 1) {
            return;
        }
            console.log(enteredAge, enteredUsername)
            setEnteredUsername('');
            setEnteredAge('');
    }

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    } 

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                {/* can use onChange to track the changes */}
                <label htmlFor="username">Username </label>
                <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler}/>
                <label htmlFor="userage">Age (Years) </label>
                <input id="userage" type="number" value={enteredAge} onChange={ageChangeHandler}/>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    )
};

export default AddUser;