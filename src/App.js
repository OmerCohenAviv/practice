import React, { Component } from 'react';
import './App.css';
import Form from './components/Form/Form';
import UserList from './components/UserList/UserList';

class App extends Component {
  state = {
    user: {
      firstName: '',
      lastName: '',
      userName: '',
      gamesPlayed: 0
    },
    allUsers: [],
    error: '',
    viewGames: true
  };

  changeHandler = (event, inputType) => {
    const updateInputV = { [inputType]: event.target.value }
    const updateUser = { ...this.state.user, ...updateInputV }
    this.setState({ user: updateUser })
  };

  checkDuplicate = (userInfo) => {
    let isDuplicate = false;
    if (this.state.allUsers === undefined || this.state.allUsers.length === 0) {
      console.log('Empty')
      return isDuplicate;
    }
    for (const i in this.state.allUsers) {
      if (this.state.allUsers[i][2] === userInfo[2]) {
        isDuplicate = true;
      }
      if (isDuplicate === true) { break }
    }
    return isDuplicate
  };

  submitHandler = (event, userInfo) => {
    const isDuplicate = this.checkDuplicate(userInfo)
    event.preventDefault()
    const allUsersArr = [...this.state.allUsers]
    if (isDuplicate) { this.setState({ error: 'User is arleady taken' }) }
    else {
      allUsersArr.push(userInfo)
      return this.setState({ allUsers: allUsersArr, error: '' })
    }
  };
  viewGamesHandler = () => {
    this.setState((prevState) =>( {viewGames: !prevState.viewGames}) )
  }

  render() {
    const form = (
      <Form
        error={this.state.error}
        submit={(event, userInfo) => this.submitHandler(event, userInfo)}
        change={(event, inputType) => this.changeHandler(event, inputType)}
        user={this.state.user}
      />
    );


    return (
      <div className="App">
        {form}
        <UserList
        clicked  = {this.viewGamesHandler}
        viewGames = {this.state.viewGames}
        allUsers={this.state.allUsers} />
      </div>
    );
  };
};

export default App;
