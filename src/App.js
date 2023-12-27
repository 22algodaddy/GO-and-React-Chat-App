// App.js
import React, { useEffect, useState } from "react";
import ChatInput from "./components/ChatInput";
import ChatHistory from "./components/ChatHistory";
import Header from "./components/Header";
import { connect, SendMsg } from "./api";

const App = () => {
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    const handleNewMessage = (event) => {
      const msg = JSON.parse(event.data);
      console.log("New Message:", msg);
      setChatHistory((prevChatHistory) => [...prevChatHistory, msg]);
    };

    connect(handleNewMessage);


  }, []);

  return (
    <div>
      <Header />
      <ChatHistory chatHistory={chatHistory} />
      <ChatInput SendMsg={SendMsg} />
    </div>
  );
};

export default App;
