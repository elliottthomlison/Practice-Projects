import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Main.css'

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <h1>React Counter</h1>
        <h1>0</h1>
        <div>
            <button className="btn btn-success">Increase</button>
            <button className="btn btn-danger">Decrease</button>
            <button className="btn btn-primary">Return to 0</button>
        </div>
      </div>
    );
  }
}

export default Main;
