import React from "react";

const Lista = props => {
  return (
    <ul>
      {props.nome.map((nome, key) => {
        return <li key={key}>{nome}</li>;
      })}
    </ul>
  );
};

export default Lista;
