import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Users from './Users/Users';
import Posts from './Posts/Posts';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Users />
       <Posts />
      </div>
    );
  }
}

export default App;
