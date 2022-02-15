import React, { useState, useEffect, useRef } from "react";
import { AUTHORS } from "../../utils/constants";
import { MessageList } from "../MessageList";
import { FormMui, FormWithLogger } from "../FormMui";
import { ChatList } from "../ChatList";
import { Navigate, useNavigate, useParams } from "react-router";

import "../../App.css";
import { useDispatch, useSelector } from "react-redux";
import { selectMessages } from "../../store/messages/selectors";
import { addMessage, addMessageWithThunk } from "../../store/messages/actions";

export function Chat() {
  const { chatId } = useParams();

  const messages = useSelector(selectMessages);
  const dispatch = useDispatch();

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
    dispatch(addMessageWithThunk(chatId, newMsg));
  };

  useEffect(() => {
    messagesEnd.current?.scrollIntoView();
  }, [messages]);

  if (!messages[chatId]) {
    return <Navigate to="/chats" replace />;
  }

  return (
    <div className="App">
      <div>
        <div className="App-content">
          <MessageList messages={messages[chatId]} />
        </div>
        <FormWithLogger messageColor="yellow" onSubmit={handleAddMessage} />
      </div>
    </div>
  );
}

// function middleware(store) {
//   return function (next) {
//     return function (action) {
//       // ....
//       return next(action);
//     };
//   };
// }
