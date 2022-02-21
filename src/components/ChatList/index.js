import { onChildAdded, onChildRemoved, onValue, set } from "@firebase/database";
import { List } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import {
  chatsRef,
  getChatsRefById,
  getMessageRefById,
  getMessagesRefByChatId,
} from "../../services/firebase";

import { addChat, initChatsTracking } from "../../store/chats/actions";
import { selectChats } from "../../store/chats/selectors";
import { FormMui } from "../FormMui";
import { ChatItem } from "./ChatItem";

export const ChatList = () => {
  const chats = useSelector(selectChats);
  // const [chats, setChats] = useState([]);
  const dispatch = useDispatch();

  const handleAddChat = (newChatName) => {
    const newId = `chat-${Date.now()}`;
    // dispatch(addChat(newId, newChatName));
    set(getChatsRefById(newId), { id: newId, name: newChatName });
    set(getMessagesRefByChatId(newId), { empty: true });
  };

  // useEffect(() => {
  //   const unsubscribe = onValue(chatsRef, (snapshot) => {
  //     const newChats = [];
  //     snapshot.forEach((child) => {
  //       newChats.push(child.val());
  //     });

  //     setChats(newChats);
  //   });

  //   return unsubscribe;
  // }, []);

  // useEffect(() => {
  //   const unsubscribe = onChildAdded(chatsRef, (snapshot) => {
  //     setChats((prevChats) => [...prevChats, snapshot.val()]);
  //   });

  //   return unsubscribe;
  // }, []);

  // useEffect(() => {
  //   const unsubscribe = onChildRemoved(chatsRef, (snapshot) => {
  //     setChats((prevChats) =>
  //       prevChats.filter(({ id }) => id !== snapshot.val()?.id)
  //     );
  //   });

  //   return unsubscribe;
  // }, []);

  useEffect(() => {
    dispatch(initChatsTracking());
  }, []);

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
