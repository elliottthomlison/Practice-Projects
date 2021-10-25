import React from 'react';
import Button from '../Button/Button';
import Card from '../UI/Card';
import classes from './AddCity.module.css'

const AddCity = (props) => {
  const addCityHandler = (event) => {
    event.preventDefault();
    
  }


  return (
    // import the card after
    <Card className={classes.input}>
      <form onSubmit={addCityHandler}>
        <label htmlFor="fromCity">From:</label>
        <input id="fromcity" type="text" />
        <label htmlFor="toCity">To:</label>
        <input id="toCity" type="text" />
        <Button />
      </form>
    </Card>
  );
}

export default AddCity;