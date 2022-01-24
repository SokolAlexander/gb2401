import logo from "./logo.svg";
import "./App.css";
import { Message } from "./components/Message";
import { Counter } from "./components/Counter";

const myText = "Hello from app!!!";

function App() {
  const handleMessageClick = () => {
    console.log("hello!!!");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Message
          myString="my string"
          text={myText}
          onMessageClick={handleMessageClick}
        />
        <Counter />
      </header>
    </div>
  );
}

export default App;
