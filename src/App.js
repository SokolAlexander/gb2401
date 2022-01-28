import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Message } from "./components/Message";
import { Counter } from "./components/Counter";
import { Form } from "./components/Form";
import { useEffect } from "react/cjs/react.development";

function App() {
  const [messageList, setMessageList] = useState([
    { text: "msg1", author: "Me" },
    { text: "i am bot", author: "Robot" },
  ]);
  const handleMessageClick = () => {
    console.log("hello!!!");
  };

  const handleAddMessage = (text) => {
    setMessageList((prevMessageList) => [...prevMessageList, text]);
  };

  useEffect(() => {
    console.log(messageList[messageList.length - 1]);
  }, [messageList]);

  return (
    <>
      <h2>FRAGMENT</h2>
      <div className="App">
        <header className="App-header">
          {messageList.map((text) => (
            <Message text={text} onMessageClick={handleMessageClick} />
          ))}
          {/* <Counter /> */}
          <Form onSubmit={handleAddMessage} />
        </header>
      </div>
    </>
  );
}

export default App;
