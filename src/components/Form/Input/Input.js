import React from 'react';

const input = ( props ) => {
    const inputType = props.placeholder
    return (
        <input
        required
        style={{padding:'10px',margin:'10px'}}
        type = 'text'
        onChange = {(event) => props.change(event, inputType)}
        value = {props.value}
        placeholder = {props.placeholder}
        />

    );
};


export default input;