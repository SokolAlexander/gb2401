import { useState } from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import App from "../../App";
import { ThemeContext } from "../../utils/ThemeContext";
import { Chat } from "../Chat";
import { ChatList } from "../ChatList";
import { Profile } from "../Profile";

const Home = () => <h2>Home page</h2>;

export const Router = () => {
  const [messageColor, setMessageColor] = useState("red");

  const contextValue = {
    messageColor,
    setMessageColor,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <BrowserRouter>
        <div>
          <NavLink
            to="/"
            style={({ isActive }) => ({ color: isActive ? "green" : "grey" })}
          >
            home
          </NavLink>
        </div>
        <div>
          <NavLink
            style={({ isActive }) => ({ color: isActive ? "green" : "grey" })}
            to="/chats"
          >
            chats
          </NavLink>
        </div>
        <div>
          <NavLink
            style={({ isActive }) => ({ color: isActive ? "green" : "grey" })}
            to="/profile"
          >
            profile
          </NavLink>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="chats" element={<ChatList />}>
            <Route path=":chatId" element={<Chat />} />
          </Route>
          <Route element={<h2>404</h2>} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
};

// const summ = (a, b) => a + b;
// const mul = (a, b) => a * b;

// const withLogger = (fn) => {
//   return (...args) => {
//     console.log(args);
//     return fn(args);
//   };
// };

// const summWithLogs = withLogger(summ);
// const multWithLogs = withLogger(mul);

// summWithLogs(1, 2);
// multWithLogs(1, 2);
