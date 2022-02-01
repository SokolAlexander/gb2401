import { Message } from "../Message";

export const MessageList = ({ messages }) => {
  console.log(messages[0]?.athuor);
  return messages.map((message) => (
    <div key={message.id}>
      <Message text={message.text} author={message.athuor} />
    </div>
  ));
};
