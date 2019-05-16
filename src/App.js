import React, { Component } from "react";
import axios from "axios";
import "./App.css";

import ListRepositories from "./components/ListRepositories/ListRepositories";

class App extends Component {
  state = {
    repositories: [],
    user_repo: "",
    loading: false,
    owner: []
  };

  handleInput = e => {
    this.setState({
      user_repo: e.target.value
    });
  };

  handleClick = async e => {
    let client_id = "5c41c6afc48dde855925";
    let client_secret = "ce4e8c18c6d7fb8e5bf23d4debbecf9a3ffc318a";

    e.preventDefault();

    await axios
      .get(
        `https://api.github.com/repos/${
          this.state.user_repo
        }?client_id=${client_id}&client_secret=${client_secret}`
      )
      .then(repo => {
        this.setState({
          loading: true,
          repositories: [...this.state.repositories, repo.data],
          owner: repo.data.owner
        });
      })
      .catch(err => {
        console.log(err);
      });
    console.log(this.state.repositories);
  };

  render() {
    return (
      <div className="container">
        <div className="row text-center">
          <div className="col-md-12">
            <h1 className="title">Github Repo</h1>
          </div>
        </div>
        <form className="form-group">
          <div className="row">
            <div className="col-md-4" />
            <div className="col-md-4">
              <input
                onChange={this.handleInput}
                className="form-control"
                placeholder="user/repo"
              />
            </div>
            <div className="col-md-4">
              <button onClick={this.handleClick} className="btn btn-default">
                Search
              </button>
            </div>
          </div>
        </form>

        <ListRepositories repositories={this.state.repositories} />
      </div>
    );
  }
}

export default App;
