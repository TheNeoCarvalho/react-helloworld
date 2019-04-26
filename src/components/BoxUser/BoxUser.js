import React from "react";
import "./BoxUser.css";

const BoxUser = props => {
  return (
    <div className="boxUser">
      <img src={props.img} />
      <h3>Nome: {props.nome}</h3>
      <h3>Email: {props.email}</h3>
    </div>
  );
};

export default BoxUser;
