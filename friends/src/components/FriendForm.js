import React, { Component } from "react";
import { connect } from "react-redux";

import { addFriends } from "../actions";

class FriendForm extends Component {
  state = {
    name: "",
    age: "",
    email: ""
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    const { name, age, email } = this.state;
    this.props.addFriends({ name, age: Number(age), email });
    this.setState({
      name: "",
      age: "",
      email: ""
    });
  };

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <input
          name="name"
          placeholder="Name"
          onChange={e => this.handleChange(e)}
          value={this.state.name}
        />
        <input
          name="age"
          placeholder="Age"
          onChange={e => this.handleChange(e)}
          value={this.state.age}
        />
        <input
          name="email"
          placeholder="Email"
          onChange={e => this.handleChange(e)}
          value={this.state.email}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default connect(
  null,
  { addFriends }
)(FriendForm);
