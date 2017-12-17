import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import actions from '../actions/userAction'

class App extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }
  }

  /* method sets the state of inputed fields */
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

  /* adds user and calls property of createUser */
  addUser = (event) => {
    const users = {
      username: this.state.username,
      password: this.state.password
    }
    this.props.createUser(users);
  }

  render() {
    return (
      <div className="App">
        <input onChange={this.userUpdate.bind(this, 'username')} type="text" placeholder="username"/><br />
        <input onChange={this.userUpdate.bind(this, 'password')} type="password" placeholder="password"/><br />
        <button onClick={this.addUser}>Add User</button>
        <h3>Users Added</h3>
        <ol>
          {this.props.user.allUsers.map((users) => {
            return <li key={users.username}>{users.username}</li>
          })
        }
        </ol>
      </div>
    );
  }
}

/* this method references the reducers
  return result of reducers become property of this module
*/
const stateToProps = (state) => {
  return {
    user: state.user,    /* this is reference to userReducer */
    movie: state.movie
  }
}

/* this method references the actions */
const dispatchToProps = (dispatch) => {
  return {
    createUser: (user) => dispatch(actions.createUser(user))
  }
}

export default connect(stateToProps, dispatchToProps)(App);
