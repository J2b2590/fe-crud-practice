import React, { useState, useEffect } from "react";

import TodoContainer from "./container/todo_container";
import Counter from "./Counter";
import Icons from "./Icon";

import axios from "axios";
import "./App.css";

function App() {
  let [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/todos").then((res) => {
      setTodos(res.data);
    });
    // console.log(todos);
  });

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/todos/${id}`).then((del) => {
      axios.get("http://localhost:3000/todos").then((res) => {
        // console.log(res, "NEW TODOs");
        return setTodos(res.data);
      });
      // console.log(del);
    });
  };

  return (
    <div className="app">
      <h1>TODO</h1>
      <div>
        <TodoContainer todos={todos} handleDelete={handleDelete} />
        {/* <Counter />
        <Icons /> */}
      </div>
    </div>
  );
}

export default App;
