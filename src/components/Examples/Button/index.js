import "./styles.css";

// export const ButtonWithImage = ({ src, onClick }) => {
//   return (
//     <div className="my-btn" onClick={onClick}>
//       <img src={src} alt="button" width="70px" />
//     </div>
//   );
// };

// export const ButtonWithText = ({ text, onClick }) => {
//   return (
//     <div className="my-btn" onClick={onClick}>
//       <span className="my-btn-title">{text}</span>
//     </div>
//   );
// };

// export const ButtonWithElement = ({ element, onClick }) => {
//   return (
//     <div className="my-btn" onClick={onClick}>
//       {element}
//     </div>
//   );
// };

export const Button = (props) => {
  console.log(props);

  return (
    <div className="my-btn" onClick={props.onClick}>
      {props.children}
    </div>
  );
};
