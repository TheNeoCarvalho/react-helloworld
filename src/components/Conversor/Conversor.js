import React, { Component } from "react";

class Conversor extends Component {
  render() {
    const c = this.props.cotacao;
    const v = this.props.valor;
    return (
      <div>
        <h6>{`${this.props.text}: ${this.props.cotacao} - ${c * v}`}</h6>
      </div>
    );
  }
}

export default Conversor;
