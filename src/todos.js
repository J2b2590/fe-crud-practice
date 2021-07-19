import axios from "axios";
import React, { useEffect, useState } from "react";

function Todos(props) {
  console.log(props, "TODO props");
  // let [todos, setTodos] = useState([]);
  // useEffect(() => {
  //   axios.get("http://localhost:3000/todos").then((res) => {
  //     console.log(res, "TODOS useEffect");
  //   });
  //   // console.log(todos);
  // }, []);

  return (
    <div>
      <li>{props.text}</li>
      <button onClick={() => props.handleDelete(props.id)}>Delete</button>
      <button onClick={() => props.midiplayerC2(props.id)}>C</button>
    </div>
  );
}

export default Todos;
