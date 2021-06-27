import React from "react";
import Todos from "./todos";

function Show(props) {
  const handleShow = (id) => {
    console.log(id, "SHOW");
  };
  return (
    <div>
      <Todos />
    </div>
  );
}

export default Show;
