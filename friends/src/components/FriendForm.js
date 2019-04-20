import React, { Component } from "react";

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

  handleSubmit = e => {};

  render() {
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
    </form>;
  }
}

export default FriendForm;
