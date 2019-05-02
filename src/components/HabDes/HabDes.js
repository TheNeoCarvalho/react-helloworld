import React, { Component } from "react";

export default class HabDes extends Component {
  state = {
    status: true
  };

  alternar = () => {
    this.setState({ status: !this.state.status });
  };

  render() {
    return (
      <div className="App">
        <h1>{this.state.status ? "Habilitado" : "Desabilitado"}</h1>
        <button className="btn btn-primary" onClick={this.alternar}>
          {this.state.status ? "Desabilitar" : "Habilitar"}
        </button>
      </div>
    );
  }
}
