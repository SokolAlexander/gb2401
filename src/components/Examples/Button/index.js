import React from "react";
import { useCallback } from "react";
import { useState } from "react";
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

export const Child1 = React.memo(({ count }) => {
  console.log("Child111111");
  return <h4>{count}</h4>;
});
export const Child2 = React.memo(({ onClick }) => {
  console.log("Child2222222");
  return <button onClick={onClick}>CLICK</button>;
});
export const Child3 = React.memo(() => {
  console.log("Child3333333");
  return <span>Subtitle</span>;
});

export const Parent = () => {
  const [count, setCount] = useState(0);

  const increase = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <>
      <Child1 count={count} />
      <Child2 onClick={increase} />
      <Child3 />
    </>
  );
};
