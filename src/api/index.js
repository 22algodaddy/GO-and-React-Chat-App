// api.js
const Socket = new WebSocket('ws://localhost:8080/ws');

const connect = (cb) => {
  console.log("connecting...");
  Socket.onopen = () => {
    console.log("connected");
  };
  Socket.onmessage = (msg) => {
    console.log("Message from websocket: ", msg);
    cb(msg);
  };
  Socket.onclose = (event) => {
    console.log("Socket Closed Connection: ", event);
  };
  Socket.onerror = (error) => {
    console.log("Socket Error: ", error);
  };
};

const SendMsg = (msg) => {
  console.log("Sending Message: ", msg);
  Socket.send(msg);
};

export { connect, SendMsg };
