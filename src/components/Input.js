import React from 'react';
const input = ( props ) => {
    return (
        <div>
        <form className="input-group" onSubmit={(event) => props.sendMessage(props.msg, event)}>
          <input type="text" className="form-control" placeholder="Enter your message..." value={props.msg} onChange={props.changeValue} />
          <div className="input-group-append">
            <button className="btn submit-button" disabled={props.disabled} >
              SEND
            </button>
          </div>
        </form>
      </div>
    );
};
export default input;
