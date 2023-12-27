// ChatHistory.js
// ChatHistory.js
import React from "react";
import Message from "../Message/Message";

const ChatHistory = (props) => {
  console.log(props.chatHistory);

  return (
    <div className="flex flex-col bg-gray-600 p-2 rounded-lg">
      <h2>Chat History</h2>
      {props.chatHistory.length > 0 ? (
        props.chatHistory.map((msg, index) => (
          <div key={index}>
            <Message message={msg} />
          </div>
        ))
      ) : (
        <p>No chat history available</p>
      )}
    </div>
  );
};

export default ChatHistory;

