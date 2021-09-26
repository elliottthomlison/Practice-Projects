import React, { useState } from "react";
import Button from "../Button/Button";
import Card from "../UI/Card";
import classes from "./AddCity.module.css"

const AddCity = (props) => {
  const [enteredFromCity, setEnteredFromCity] = useState("")
  const [enteredToCity, setEnteredToCity] = useState("")

  const addCityHandler = (event) => {
    event.preventDefault();
    
    if (enteredFromCity.trim().length === 0 || enteredToCity.trim().length === 0) {
      return;
   } 
      console.log(enteredFromCity, enteredToCity)
      setEnteredFromCity("");
      setEnteredToCity("");
  }

  const fromCityChangeHandler = (event) => {
    setEnteredFromCity("");
  }

  const toCityChangeHandler = (event) => {
    setEnteredToCity("");
  }

  return (
    // import the card after
    <Card className={classes.input}>
      <form onSubmit={addCityHandler}>
        <label htmlFor="fromCity">From</label>
        <input id="fromCity" type="text" value={enteredFromCity} onChange={fromCityChangeHandler}/>
        <label htmlFor="toCity">To</label>
        <input id="toCity" type="text"  value={enteredToCity} onChange={toCityChangeHandler}/>
        <Button />
      </form>
    </Card>
  );
}

export default AddCity;