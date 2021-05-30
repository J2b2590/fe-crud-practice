import React, { useState, useEffect } from "react";

import TodoContainer from "./container/todo_container";

import axios from "axios";
import "./App.css";

function App() {
  let [todos, setTodos] = useState([]);
  let [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  });

  useEffect(() => {
    axios.get("http://localhost:3000/todos").then((res) => {
      setTodos(res.data);
    });
    console.log(todos);
  }, []);

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
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>
          Click me to count up
        </button>
      </div>
    </div>
  );
}

export default App;
