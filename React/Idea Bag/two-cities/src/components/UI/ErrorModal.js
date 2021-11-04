import React from "react";

import Card from "../../../../../Idea Bag/two-cities/src/components/UI/Card";
import Button from "../../../../../Idea Bag/two-cities/src/components/Button/Button";
import classes from "./ErrorModal.module.css";

const ErrorModal = props => {

  return (
    <div className={classes.backdrop} onClick={props.onConfirm}>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onClick} name="Ok"/>
        </footer>
      </Card>
    </div>
  );
}

export default ErrorModal;