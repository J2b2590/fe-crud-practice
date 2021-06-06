import { render } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import { ReactComponent as Example } from "./example.svg";

function Icons(props) {
  let color = "";

  switch (props.num % 2 || props.num % 5) {
    case 0:
      color = "green";
      break;
    case 1:
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
      <Example fill={color} stroke="green" />
    </div>
  );
}

export default Icons;
