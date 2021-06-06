import { render } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import { ReactComponent as Example } from "./example.svg";

function Icons(props) {
  let [count, setCount] = useState(0);
  let color = "";
  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(count + 1);
    }, 1000);
    return () => clearTimeout(timer);
  });

  switch (count) {
    case 1:
      color = "green";
      break;
    case 2:
      color = "purple";
      break;
    case 3:
      color = "blue";
      break;

    default:
      break;
  }

  return (
    <div>
      {count}
      <Example fill={color} stroke="green" />
    </div>
  );
}

export default Icons;
