import React, { useState, useEffect, useRef } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Message } from "./components/Message";
// import { Counter } from "./components/Counter";
import { Form } from "./components/Form";
import { AUTHORS } from "./utils/constants";
import { MessageList } from "./components/MessageList";
import { FormMui } from "./components/FormMui";
// import { ThemeProvider } from "@emotion/react";
// import { createTheme } from "@mui/system";
// import { green, orange, purple } from "@mui/material/colors";
// import { FormMui } from "./components/FormMui";

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: purple[500],
//     },
//     secondary: {
//       main: green[500],
//     },
//   },
// });

const chats = [
  { name: "Chat1", id: "1" },
  { name: "Chat2", id: "2" },
];

function App() {
  const [messageList, setMessageList] = useState([]);
  const messagesEnd = useRef();

  const handleAddMessage = (text) => {
    sendMessage(text, AUTHORS.ME);
  };

  const sendMessage = (text, author) => {
    const newMsg = {
      text,
      author,
      id: `msg-${Date.now()}`,
    };
    setMessageList((prevMessageList) => [...prevMessageList, newMsg]);
  };

  useEffect(() => {
    messagesEnd.current?.scrollIntoView();

    let timeout;
    if (messageList[messageList.length - 1]?.author === AUTHORS.ME) {
      timeout = setTimeout(() => {
        sendMessage("still here", AUTHORS.BOT);
      }, 1000);
    }

    return () => clearTimeout(timeout);
  }, [messageList]);

  useEffect(() => {
    console.log(messagesEnd);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <ul>
        {chats.map((chat) => (
          <li key={chat.id}>{chat.name}</li>
        ))}
      </ul>
      <div className="App-content">
        <MessageList messages={messageList} />
        <div ref={messagesEnd} />
      </div>
      <Form onSubmit={handleAddMessage} />
    </div>
  );
}

export default App;

console.log(<div>Example</div>);
