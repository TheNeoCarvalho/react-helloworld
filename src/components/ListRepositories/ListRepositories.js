import React from "react";
import moment from "moment";
import "./ListRepositories.css";

const ListRepositories = props => {
  return (
    <div className="app">
      <img src={props.owner.avatar_url} />
      <h3>{props.repositories.name}</h3>
      <h5>react</h5>
      <ul>
        <li>{props.repositories.stargazers_count} star</li>
        <li>{props.repositories.forks_count} fork</li>
        <li>{props.repositories.open_issues} issues</li>
        <li> {moment(props.repositories.pushed_at).fromNow()}last commit</li>
      </ul>
    </div>
  );
};

export default ListRepositories;
