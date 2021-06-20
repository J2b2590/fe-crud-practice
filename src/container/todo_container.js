import React, { useState } from "react";
import Todos from "../todos";
import axios from "axios";

function TodoContainer(props) {
  console.log(props, "CONTAINER");
  let [text, setTodo] = useState(" ");

  const handleChange = (e) => {
    setTodo(e.target.value);
    // console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const textObj = { text };

    axios
      .post("http://localhost:3000/todos", textObj)
      .then((res) => {
        console.log(res.data, "THEN RES");
      })
      .catch((error) => {
        console.log(error);
      });
    // setTodo(" ");
  };

  return (
    <div>
      <p>container</p>

      <form onSubmit={handleSubmit}>
        <h1>Create todo</h1>
        <input
          onChange={handleChange}
          value={props.text}
          type="text"
          name="text"
          placeholder="Enter TODO"
        />
        <button>Enter</button>
      </form>
      {props.todos.map((todo) => {
        // console.log(todo.text, "MAP");
        return (
          <Todos key={todo.id} {...todo} handleDelete={props.handleDelete} />
        );
      })}
    </div>
  );
}

export default TodoContainer;
