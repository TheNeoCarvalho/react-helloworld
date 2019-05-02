import React, { Component } from "react";
import "./App.css";

import Lista from "./components/Lista/Lista";

class App extends Component {
  state = {
    nomes: [],
    nome: ""
  };

  handleAdd = n => {
    let nome = this.state.nomes;
    nome.push(n);
    this.setState({ nomes: nome });
  };

  handleChange = n => {
    this.setState({ nome: n.target.value });
  };

  render() {
    return (
      <div className="App">
        <input
          className="text-input"
          type="text"
          name="nome"
          onChange={this.handleChange}
        />
        <button
          className="btn btn-primary"
          onClick={() => {
            this.handleAdd(this.state.nome);
          }}
        >
          Adicionar nome
        </button>
        <Lista nome={this.state.nomes} />
      </div>
    );
  }
}

export default App;
