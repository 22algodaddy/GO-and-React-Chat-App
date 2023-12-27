import React from "react";

const Message = ({ message }) => {
  
    return (
      <div>
        <p>{message.body}</p> 
      </div>
    );
};

export default Message;