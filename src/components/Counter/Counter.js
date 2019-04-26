import React, { Component } from "react";
import "./Counter.css";
import Botao from "../Botao/Botao";
class Counter extends Component {
  render() {
    return (
      <div className="container">
        <h3>{this.props.contador}</h3>
      </div>
    );
  }
}

export default Counter;
