import React from "react";
import moment from "moment";
import "./ListRepositories.css";

const ListRepositories = ({ repositories }) => (
  <div className="repo">
    {repositories.map(repository => (
      <div className="app">
        <div className="Head">
          <img
            className="avatar"
            src={repository.owner.avatar_url}
            alt={repository.owner.login}
          />
          <h4>{repository.name}</h4>
          <h6>{repository.owner.login}</h6>
        </div>
        <div className="Body">
          <ul>
            <li>
              {repository.stargazers_count} <span>stars</span>
            </li>
            <li>
              {repository.forks_count} <span>forks</span>
            </li>
            <li>
              {repository.open_issues_count} <span>issues</span>
            </li>
            <li>
              {moment(repository.pushed_at).fromNow()} <span>last commit</span>
            </li>
          </ul>
        </div>
        <div className="Footer">
          <a href="#">
            <i className="fas fa-star" />
          </a>
          <a
            href={repository.html_url}
            target="_blank"
            className="btn btn-default"
          >
            ver no github <i class="fab fa-github" />
          </a>
        </div>
      </div>
    ))}
  </div>
);

export default ListRepositories;
