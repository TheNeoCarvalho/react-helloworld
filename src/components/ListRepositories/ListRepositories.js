import React from "react";
import moment from "moment";
import "./ListRepositories.css";

const ListRepositories = props => {
  return (
    <div className="app">
      <div className="Head">
        <img className="avatar" src={props.owner.avatar_url} width="25" />
        <h3>{props.repositories.name}</h3>
        <h5>{props.owner.login}</h5>
      </div>
      <div className="Body">
        <ul>
          <li>
            {props.repositories.stargazers_count} <span>star</span>
          </li>
          <li>
            {props.repositories.forks_count} <span>fork</span>
          </li>
          <li>
            {props.repositories.open_issues} <span>issues</span>
          </li>
          <li>
            {" "}
            {moment(props.repositories.pushed_at).fromNow()}
            <span> last commit</span>
          </li>
        </ul>
      </div>
      <div className="Footer">
        <img
          onClick={props.onClick}
          width="20"
          src="https://images.vexels.com/media/users/3/136916/isolated/preview/aa21eb60437133bf4f4be189636a187a-star-favorite-outline-icon-by-vexels.png"
        />
        <a
          href={props.repositories.html_url}
          target="_blank"
          className="btn btn-default"
        >
          ver no github <i class="fab fa-github" />
        </a>
      </div>
    </div>
  );
};

export default ListRepositories;
