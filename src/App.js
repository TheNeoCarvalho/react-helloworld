import React, { Component } from "react"; //jsx
import BoxUser from "./BoxUser";
import "./App.css";
//stateful components
class App extends Component {
  state = {
    pessoas: [
      {
        id: 1,
        nome: "Manolo",
        email: "manolo@gmail.com",
        img: "user.png"
      },
      {
        id: 2,
        nome: "Maria",
        email: "maria@gmail.com",
        img: "user.png"
      },
      {
        id: 3,
        nome: "Valéria",
        email: "valeria@gmail.com",
        img: "user.png"
      }
    ]
  };

  render() {
    return (
      <div className="App">
        {this.state.pessoas.map(pessoa => {
          return (
            <BoxUser img={pessoa.img} nome={pessoa.nome} email={pessoa.email} />
          );
        })}
      </div>
    );
  }
}

export default App;
