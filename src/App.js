import React, { Component } from "react"; //jsx
import BoxUser from "./BoxUser";
import "./App.css";
//stateful components
class App extends Component {
  state = {
    nome: "manoel",
    media: 5.8,
    pessoas: [
      {
        id: 1,
        nome: "Manolo",
        email: "manolo@gmail.com",
        img:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR611OngLX1ZHGdb6_ozHHKyygJLTUYyd0stvkSKp2KbuxBU0AG"
      },
      {
        id: 2,
        nome: "Maria",
        email: "maria@gmail.com",
        img: "user.png"
      }
    ]
  };

  render() {
    return (
      <div className="App">
        {}
        <BoxUser img="user.png" nome="Manoel" email="manoel@gmail.com" />
        <BoxUser img="user.png" nome="Maria" email="maria@gmail.com" />
        <BoxUser img="user.png" nome="Jose" email="jose@gmail.com" />
        <BoxUser img="user.png" nome="Joao" email="joao@gmail.com" />
      </div>
    );
  }
}

//stateless components
// const App = () => {
//   return (
//     <div className="App">
//       <h1>Neo</h1>
//     </div>
//   );
// };

export default App;
