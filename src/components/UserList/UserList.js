import React, {Fragment} from 'react';

const userList = (props) => {
    let arr = props.allUsers.map(user => 
            <li key={user[2]}>My name is {user[0]} {props.viewGames ? `and i play ${user[3]} games` : null}}</li>
        )
    return (
        <div>
            <ul>
                {arr}
            </ul>
            <button onClick={props.clicked}>{ props.viewGames ? 'hide Games' : 'Show Games' }</button>  
        </div>
    );
}

export default userList;