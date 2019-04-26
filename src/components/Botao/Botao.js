import React from "react";
import "./Botao.css";

const Botao = props => {
  return <button onClick={props.onClick}>{props.texto}</button>;
};

export default Botao;
