import React, { useState, useEffect, useRef } from "react";
import { AUTHORS } from "../../utils/constants";
import { MessageList } from "../MessageList";
import { FormMui, FormWithLogger } from "../FormMui";
import { ChatList } from "../ChatList";
import { Navigate, useNavigate, useParams } from "react-router";

import "../../App.css";

const chats = [{ id: "chat1" }];
const messages = {
  chat1: [],
};

export function Chat({ messageColor }) {
  const params = useParams();
  const navigate = useNavigate();
  const { chatId } = params;

  const [messageList, setMessageList] = useState({
    chat1: [],
    chat2: [],
    chat3: [],
  });
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
    setMessageList((prevMessageList) => ({
      ...prevMessageList,
      [chatId]: [...prevMessageList[chatId], newMsg],
    }));
  };

  useEffect(() => {
    messagesEnd.current?.scrollIntoView();

    let timeout;
    if (
      messageList[chatId]?.[messageList[chatId]?.length - 1]?.author ===
      AUTHORS.ME
    ) {
      timeout = setTimeout(() => {
        sendMessage("still here", AUTHORS.BOT);
      }, 1000);
    }

    return () => clearTimeout(timeout);
  }, [messageList]);

  if (!messageList[chatId]) {
    return <Navigate to="/chats" replace />;
  }

  return (
    <div className="App">
      {/* <ChatList /> */}
      <div>
        <div className="App-content">
          <MessageList messages={messageList[chatId]} />
        </div>
        <FormWithLogger messageColor="yellow" onSubmit={handleAddMessage} />
      </div>
    </div>
  );
}
