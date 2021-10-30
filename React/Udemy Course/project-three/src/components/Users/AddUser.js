import React from 'react';
import Card from '../UI/Card';
// import './AddUser.css';
import classes from './AddUser.module.css'

const AddUser = (props) => {
    const addUserHandler = (event) => {
        event.preventDefault();
        console.log(event.target.value)
    }

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                {/* can use onChange to track the changes */}
                <label htmlFor="username">Username </label>
                <input id="username" type="text" />
                <label htmlFor="userage">Age (Years) </label>
                <input id="userage" type="number" />
                <button type="submit">Add User</button>
            </form>
        </Card>
    )
};

export default AddUser;