import React, { Component } from "react";
import "./ListaNomes.css";

import Lista from "../Lista/Lista";

class ListaNomes extends Component {
  state = {
    nomes: [],
    nome: ""
  };

  handleAdd = n => {
    let nome = this.props.nomes;
    nome.push(n);
    this.setState({
      nomes: nome,
      nome: ""
    });

    localStorage.setItem("nomes", JSON.stringify(this.props.nomes));
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
          value={this.props.nome}
          name="nome"
          onChange={this.handleChange}
        />
        <button
          className="btn btn-primary"
          onClick={() => {
            this.handleAdd(this.props.nome);
          }}
        >
          Adicionar nome
        </button>
        <Lista nome={this.props.nomes} />
      </div>
    );
  }
}

export default ListaNomes;
