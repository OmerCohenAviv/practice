
import React from 'react';
const messageList = ( props ) => {
  console.log(props.messages)
  console.log(props.user)
    return (
        <ul className="message-list">
              {props.messages.map((message, index) => (
                <li
                  key={index}
                  className={ message.username === props.user.username ? 'message sender' : 'message recipient'}         
                >
                  <p>{ `${message.username}: ${message.msg}` } </p>
                </li>
              ))}
            </ul>
    );
};
export default messageList;