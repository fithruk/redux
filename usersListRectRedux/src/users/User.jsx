import React, { Component } from "react";
import { connect } from "react-redux";

import { addUser, removeUser } from "./users.actions";

class Users extends Component {
  constructor(props) {
    super(props);
    this.onUserCreate = this.onUserCreate.bind(this);
    this.onRemoveUser = this.onRemoveUser.bind(this);
  }

  onUserCreate() {
    const id = Math.round(Math.random() * 1000000);
    const newUser = {
      id,
      name: `Name # ${id}`,
    };
    this.props.addUser(newUser);
  }

  onRemoveUser(id) {
    this.props.removeUser(id);
  }

  render() {
    return (
      <div className="users">
        <button className="users__create-btn" onClick={this.onUserCreate}>
          Create user
        </button>
        <ul className="users__list">
          {this.props.users.map((user) => (
            <li className="users__list-item" key={user.name}>
              <span>{user.name}</span>
              <button
                className="users__delete-btn"
                onClick={() => this.onRemoveUser(user.id)}
              >
                +
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    users: state.users.usersList,
  };
};

const mapDispatch = {
  addUser,
  removeUser,
};

export default connect(mapState, mapDispatch)(Users);
