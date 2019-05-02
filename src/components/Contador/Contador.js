import React, { Component } from "react";

export default class Contador extends Component {
  state = {
    conta: 10
  };

  start = () => {
    setInterval(() => {
      if (this.state.conta > 0) {
        this.setState({ conta: this.state.conta - 1 });
      } else {
        this.setState({ conta: "Acabou!!" });
      }
    }, 1000);
  };

  render() {
    return (
      <div className="App">
        <h1>{this.state.conta}</h1>
        <button className="btn btn-primary" onClick={this.start}>
          Start
        </button>
      </div>
    );
  }
}
