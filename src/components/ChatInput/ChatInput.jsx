import React, { useState } from "react";

const ChatInput = ({ SendMsg }) => {
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() !== "") {
      SendMsg(JSON.stringify({input}));
      setInput("");
    }
  };

  return (
    <div className="flex flex-col  bg-green-100 p-2 rounded-lg">
      <input
        type="text"
        placeholder="Type your message..."
        className="flex-grow px-4 py-2 rounded-l-md focus:outline-none focus:ring focus:border-blue-300 bg-gray-800 text-white"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="bg-gray-400 text-white px-1 py-2 rounded-md my-2 hover:bg-blue-600 w-40 mx-auto font-bold"
        onClick={sendMessage}
      >
        Send
      </button>
    </div>
  );
};

export default ChatInput;