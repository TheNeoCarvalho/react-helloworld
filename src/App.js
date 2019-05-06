import React, { Component } from "react";
import axios from "axios";

import "./App.css";

class App extends Component {
  state = {
    valor: 0,
    cotacao: 0
  };

  componentDidMount() {
    axios.get("https://economia.awesomeapi.com.br/json/USD").then(data => {
      let cotacao = data.data[0].ask;
      this.setState({ cotacao });
    });
  }

  handleChange = event => {
    let valor = event.target.value;
    this.setState({ valor });
  };

  render() {
    return (
      <div className="App">
        <h1>Conversor de Moedas</h1>
        <input className="btn" onChange={this.handleChange} />
        <h6>{`$: ${this.state.valor}`}</h6>
        <h6>{`Cotacão: ${this.state.cotacao}`}</h6>
        <h6>
          {`${(this.state.cotacao * this.state.valor).toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL"
          })}`}
        </h6>
      </div>
    );
  }
}

export default App;
