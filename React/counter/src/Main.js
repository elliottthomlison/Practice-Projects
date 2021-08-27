import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Main.css";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }
  increment = () => {
    this.setState({ number: this.state.number + 1 });
  };

  decrement = () => {
    this.setState({ number: this.state.number - 1 });
  };

  home = () => {
      this.setState({ number: 0 })
  }

  render() {
    return (
      <div className="body">
        <div className="container">
          <h1>React Counter</h1>
          <h1>{this.state.number}</h1>
          <div>
            <button className="btn btn-success" onClick={this.increment}>
              Increase
            </button>
            <button className="btn btn-danger" onClick={this.decrement}>
              Decrease
            </button>
            <button className="btn btn-primary" onClick={this.home}>
              Return to 0
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
