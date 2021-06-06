import { render } from "@testing-library/react";
import React from "react";
import { ReactComponent as Example } from "./example.svg";

function Icons() {
  return (
    <div>
      <Example fill="purple" stroke="green" />
    </div>
  );
}

export default Icons;
