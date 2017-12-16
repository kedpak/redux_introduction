import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';


class App extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }
  }

  userUpdate = (field, event) => {
    console.log(field + ': is ' + event.target.value);
  }

  pss

  render() {
    return (
      <div className="App">
        <input onChange={this.userUpdate.bind(this, 'username')} type="text" placeholder="username"/><br />
        <input onChange={this.userUpdate.bind(this, 'password')} type="password" placeholder="password"/><br />
        <button>Add User</button>
      </div>
    );
  }
}

export default App;
