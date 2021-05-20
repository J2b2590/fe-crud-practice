// import axios from "axios";
import React, { useState } from "react";

function Todos(props) {
  console.log(props, "TODOs");

  let [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <div>
      <li className={isActive ? "show" : "noShow"}>{props.text}</li>
      <button onClick={handleToggle}>HIDE</button>
    </div>
  );
}

export default Todos;
