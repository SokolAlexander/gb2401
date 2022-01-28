import React from "react";
import "./styles.css";

// export const Message = ({ text, myString, onMessageClick }) => {
//   return (
//     <h3 className="header" onClick={onMessageClick}>Message Text, {text}</h3>
//   );
// };

export class Message extends React.Component {
  render() {
    const { text, onMessageClick } = this.props;
    return <span onClick={onMessageClick}>Message Text, {text}</span>;
  }
}
