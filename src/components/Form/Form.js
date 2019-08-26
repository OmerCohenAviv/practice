import React from 'react';
import Input from './Input/Input';

const form = (props) => {
    const inputsArr = Object.keys(props.user).map(input => {
        return input === 'gamesPlayed' ? null :
            <Input
                change={props.change}
                key={input}
                placeholder={input}
                value={props.user[input]} />
    });
    const inputValues = Object.values(props.user);
    return (
        <form
            onSubmit={(event) => props.submit(event, inputValues)}
            style={{ display: 'flex', flexDirection: 'column', width: '25%', margin: 'auto' }}>
            {inputsArr}
            <button>Submit</button>
            <p>{props.error}</p>
        </form>
    );
};


export default form;