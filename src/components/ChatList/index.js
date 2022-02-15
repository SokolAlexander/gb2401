import { List } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import { addChat } from "../../store/chats/actions";
import { selectChats } from "../../store/chats/selectors";
import { FormMui } from "../FormMui";
import { ChatItem } from "./ChatItem";

export const ChatList = () => {
  const chats = useSelector(selectChats);
  const dispatch = useDispatch();

  const handleAddChat = (newChatName) => {
    const newId = `chat-${Date.now()}`;
    dispatch(addChat(newId, newChatName));
  };

  return (
    <>
      <List>
        {chats.map((chat) => (
          <ChatItem key={chat.id} chat={chat} />
        ))}
      </List>
      <FormMui onSubmit={handleAddChat} />
      <Outlet />
    </>
  );
};
