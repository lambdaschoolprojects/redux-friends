import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";

// components
import Login from "./components/login";
import Home from "./components";
import PrivateRoute from "./components/PrivateRoute";
import Friends from "./components/Friends";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/protected" component={Friends} />
      </div>
    );
  }
}

export default App;
