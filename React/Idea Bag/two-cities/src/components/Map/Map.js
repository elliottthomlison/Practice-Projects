import React from "react";
import classes from "./Map.module.css";
import Card from "../UI/Card";
// import Button from "../Button/Button";

const Map = () => {
  return (
    <Card className={classes.input}>
      <form>
        <label htmlFor="kmdistance">Distance in Kilometers</label>
        <input id="kmdistance" type="text" placeholder="kilometers"/>
        <label htmlFor="mdistance">Distance in Miles</label>
        <input id="mdistance" type="text" placeholder="miles" />
        {/* <Button /> */}
      </form>
    </Card>
  );
};

export default Map;
