import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

// components
import Login from './components/login';
import Home from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
      </div>
    );
  }
}

export default App;
