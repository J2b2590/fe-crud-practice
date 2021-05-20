import React, { useState, useEffect } from "react";

import axios from "axios";
import "./App.css";

function App() {
  let [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/todos").then((res) => {
      setTodos(res.data);
    });
    console.log(todos);
  }, []);

  return (
    <div>
      <h1>TODO</h1>
      <div>
        {todos.map((todo) => {
          console.log(todo.text, "MAP");
          return <li>{todo.text}</li>;
        })}
      </div>
    </div>
  );
}

export default App;
