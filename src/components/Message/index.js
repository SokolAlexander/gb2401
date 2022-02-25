import React, { useContext } from "react";
import PropTypes from "prop-types";
import "./styles.css";
import { ThemeContext } from "../../utils/ThemeContext";

export const Message = ({ text, author }) => {
  // const { messageColor } = useContext(ThemeContext);
  return (
    <div>
      <span>
        {author}: {text}
      </span>
    </div>
  );
};

// Message.propTypes = {
//   text: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number]),
//   author: PropTypes.string.isRequired,
// };

// export class Message extends React.Component {
//   render() {
//     const { text, author } = this.props;
//     return (
//       <div>
//         <span>
//           {author}: {text}
//         </span>
//       </div>
//     );
//   }
// }
