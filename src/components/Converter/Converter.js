import React, { Component } from "react";

export default class Converter extends Component {
  render() {
    return (
      <div className="App">
        <h1>Conversor de Moedas</h1>
        <input className="btn" onChange={this.handleChange} />
        <h6>
          {this.state.valor === 0
            ? `Informe um valor`
            : `$ ${this.state.valor} com a cotação R$ 3,97 são R$ ${(
                this.state.valor * this.state.cotacao
              ).toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL"
              })} reais`}
        </h6>
      </div>
    );
  }
}
