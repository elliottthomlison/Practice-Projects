import React, { useState } from "react";
import Card from "../../UI/Card/Card.js"
import classes from "../../UI/Card/Card.module.css"

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length > 0){
      setIsValid(true)
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false)
      return 
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <Card classname={classes.input}>
      <form onSubmit={formSubmitHandler}>
        <div className={`form-control ${!isValid ? "invalid" : ""}`}>
          <label>Course Goal</label>
          <input type="text" onChange={goalInputChangeHandler} />
        </div>
        <Button type="submit">Add Goal</Button>
      </form>
    </Card>
  );
};

export default CourseInput;
