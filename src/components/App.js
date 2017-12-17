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
    const users = {
      username: this.state.username,
      password: this.state.password
    }
    this.props.createUser(users);
  }

  render() {
    console.log('MAGIC STICK ' + this.props.user.allUsers)
    console.log('MAGIC STICK ' + this.props.user.allMovies)
    return (
      <div className="App">
        <input onChange={this.userUpdate.bind(this, 'username')} type="text" placeholder="username"/><br />
        <input onChange={this.userUpdate.bind(this, 'password')} type="password" placeholder="password"/><br />
        <button onClick={this.addUser}>Add User</button>
        <h3>Users Added</h3>
        <ol>

        </ol>
      </div>
    );
  }
}

const stateToProps = (state) => {
  return {
    user: state.user,    /* this is reference to userReducer */
    movie: state.movie
  }
}

const dispatchToProps = (dispatch) => {
  return {
    createUser: (user) => dispatch(actions.createUser(user))
  }
}

export default connect(stateToProps, dispatchToProps)(App);
