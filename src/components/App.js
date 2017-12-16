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
    if (field === 'username') {
      this.setState({
        username: event.target.value
      })
      return;
    }
    if (field === 'password'){
      this.setState({
        password: event.target.value
      })
      return;
    }
  }

  addUser = (event) => {
    console.log('ADD USER: ' + this.state.username);
    console.log('ADD USER: ' + this.state.password);
  }

  render() {
    return (
      <div className="App">
        <input onChange={this.userUpdate.bind(this, 'username')} type="text" placeholder="username"/><br />
        <input onChange={this.userUpdate.bind(this, 'password')} type="password" placeholder="password"/><br />
        <button onClick={this.addUser}>Add User</button>
      </div>
    );
  }
}

export default App;
