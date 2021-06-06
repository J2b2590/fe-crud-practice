import { render } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import { ReactComponent as Example } from "./example.svg";

function Icons(props) {
  let fillColor = "";
  let strokeColor = "";

  switch (props.num % 2 || props.num % 5 || props.num % 3) {
    case 0:
      fillColor = "green";
      strokeColor = "yellow";
      break;
    case 1:
      fillColor = "purple";
      strokeColor = "green";
      break;
    case 3:
      fillColor = "blue";
      strokeColor = "orange";
      break;

    default:
      break;
  }

  return (
    <div>
      <Example fill={fillColor} stroke={strokeColor} />
    </div>
  );
}

export default Icons;
