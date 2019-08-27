import React, { Component } from 'react';


import Chat from './components/Chat';
import './App.css';

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

class App extends Component  { 
  state = {
  	john: {
      username: 'John',
      msg: ''
  },
    amy: {
      username: 'Amy',
      msg: ''
   },
    allMessages: []
 }
changeValueHandler = (event, username) => {
  const updateUser = {...this.state[username], msg: event.target.value }
  this.setState({[username]: updateUser });
}

sendMessageHandler = (msg, username, event) => { 
  	event.preventDefault()
	const message = {msg, username}
	const messagesArr = [...this.state.allMessages]
    messagesArr.push(message)
    this.setState({allMessages: messagesArr})
}
 disableSendHandler = (value) => {
 const disabled = value.trim() === ''
 return disabled
 }
render() {
	return (
  	 		 <div className="App">
     			 <div className='container'>
     				 <Chat 
              			disabled = {this.disableSendHandler(this.state.john.msg)}
              			 sendMessage = {(msg,event) => this.sendMessageHandler(msg,'John', event)}
              			 changeValue = {(event) => this.changeValueHandler(event,'john')}
              		     user={this.state.john}
            			 messages={[...this.state.allMessages]} />
      				 <Chat 
						disabled = {this.disableSendHandler(this.state.amy.msg)}
						 sendMessage = {(msg,event) => this.sendMessageHandler(msg,'Amy',event)}
						 changeValue = {(event) => this.changeValueHandler(event,'amy')}
						 user={this.state.amy} 
						 messages={[...this.state.allMessages]} />
     		 </div>
		</div>
		);
	};
};

export default App;
