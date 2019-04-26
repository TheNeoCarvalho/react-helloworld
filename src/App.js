import React, { Component } from "react";
import "./App.css";
import Counter from "./components/Counter/Counter";
import Botao from "./components/Botao/Botao";
class App extends Component {
  state = {
    count: 0
  };
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  handleDecrement = () => {
    if (!(this.state.count < 1)) {
      this.setState({ count: this.state.count - 1 });
    }
  };
  render() {
    return (
      <div className="App">
        <h1>{this.state.app}</h1>
        <Botao onClick={this.handleDecrement} texto="-" />
        <Counter contador={this.state.count} />
        <Botao onClick={this.handleIncrement} texto="+" />
      </div>
    );
  }
}

export default App;
