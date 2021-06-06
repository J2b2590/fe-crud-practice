import React, { useState, useEffect } from "react";
import Icons from "./Icon";

function Counter() {
  let [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(count + 1);
    }, 1000);
    return () => clearTimeout(timer);
  });
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Click me to count up</button>
      <button onClick={() => setCount((count = 0))}>CLEAR TIMER</button>
      <button onClick={() => setCount(count - 1)}>Subtract</button>
      <Icons num={count} />
    </div>
  );
}

export default Counter;
