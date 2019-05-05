import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    valor: 0,
    cotacao: 3.97,
    valorConvertido: 0
  };

  handleClick = () => {};

  handleChange = event => {
    this.setState({ valor: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <h1>Conversor de Moedas</h1>
        <input className="btn" onChange={this.handleChange} />
        <button className="btn btn-danger" onClick={this.onClick}>
          Converter
        </button>
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

export default App;
