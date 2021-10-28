import React from 'react';

function AddCity() {
  return (
    // import the card after
    <div>
      <form>
        <label htmlFor="fromCity">From:</label>
        <input id="fromcity" type="text" />
        <label htmlFor="toCity">To:</label>
        <input id="toCity" type="text" />
        {/* button will go here */}
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default AddCity;