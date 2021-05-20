import React, { useState, useEffect } from "react";

import TodoContainer from "./container/todo_container";

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
        <TodoContainer todos={todos} />
      </div>
    </div>
  );
}

export default App;
