import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>{count}</h3>
      <button
        onClick={() => {
          const newCount = count + 1;
          setCount(newCount);
        }}
      >
        Click
      </button>
    </div>
  );
};
