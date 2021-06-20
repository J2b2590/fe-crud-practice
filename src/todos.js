// import axios from "axios";
import React, { useEffect, useState } from "react";
// import axios from "axios";

function Todos(props) {
  console.log(props, "TODOs");
  // let [todos, setTodos] = useState([]);
  // useEffect(() => {
  //   axios.get("http://localhost:3000/todos").then((res) => {
  //     setTodos(res.data.text);
  //   });
  //   // console.log(todos);
  // }, []);

  return (
    <div>
      <li>{props.text}</li>
      <button onClick={() => props.handleDelete(props.id)}>Delete</button>
      {/* <li className={isActive ? "show" : "noShow"}>{props.text}</li> */}
      {/* <button onClick={handleToggle}>HIDE</button> */}
    </div>
  );
}

export default Todos;
