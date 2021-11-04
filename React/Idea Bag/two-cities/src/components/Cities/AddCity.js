import React, { useState } from "react";
import Button from "../Button/Button";
import Card from "../UI/Card";
import classes from "./AddCity.module.css"
import ErrorModal from "../UI/ErrorModal";

const AddCity = (props) => {
  const [enteredFromCity, setEnteredFromCity] = useState("");
  const [enteredToCity, setEnteredToCity] = useState("");
  const [error, setError] = useState();

  const addCityHandler = (event) => {
    event.preventDefault();
    
    if (enteredFromCity.trim().length === 0 && enteredToCity.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid information into the form.",
      });
      return;
    }

    if (enteredFromCity.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid information into the from city.",
      });
      return;
    }

    if (enteredToCity.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid information into the to city.",
      });
      return;
    }
      console.log(enteredFromCity, enteredToCity)
      setEnteredFromCity("");
      setEnteredToCity("");
  }

  const fromCityChangeHandler = (event) => {
    setEnteredFromCity(event.target.value);
  }

  const toCityChangeHandler = (event) => {
    setEnteredToCity(event.target.value);
  }

  const errorHandler = () => {
    setError(null);
  };

  return (
    // import the card after
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
      <Card className={classes.input}>
        <form onSubmit={addCityHandler}>
          <label htmlFor="fromCity">From</label>
          <input id="fromCity" type="text" value={enteredFromCity} onChange={fromCityChangeHandler} placeholder="Vancouver" />
          <label htmlFor="toCity">To</label>
          <input id="toCity" type="text"  value={enteredToCity} onChange={toCityChangeHandler} placeholder="Toronto" />
          <Button name="Calculate"/>
        </form>
      </Card>
    </div>
  );
}

export default AddCity;