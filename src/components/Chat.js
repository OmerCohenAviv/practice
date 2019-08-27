import React from 'react';

import MessageList from './MessageList';
import Input from './Input';

const chat = ( props ) => {
    return (
        <div className="chat-window">
        <h2>Super Awesome Chat</h2>
        <div className="name sender">{props.user.username}</div> 
                <MessageList messages={props.messages} user={props.user} />
                <Input 
					disabled = {props.disabled}
					sendMessage={props.sendMessage}
					changeValue={props.changeValue}
					msg={props.user.msg} />
      </div>
    );
};
export default chat;