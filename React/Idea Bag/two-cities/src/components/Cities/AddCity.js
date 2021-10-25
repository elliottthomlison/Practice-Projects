import React from 'react';
import Button from '../Button/Button';

function AddCity() {
  return (
    // import the card after
    <div>
      <form>
        <label htmlFor="fromCity">From:</label>
        <input id="fromcity" type="text" />
        <label htmlFor="toCity">To:</label>
        <input id="toCity" type="text" />
        <Button />
      </form>
    </div>
  );
}

export default AddCity;