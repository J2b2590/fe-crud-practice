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

    const userObject = {
      text,
    };

    axios
      .post("http://localhost:3000/todos", userObject)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <p>container</p>

      <form onSubmit={handleSubmit}>
        <h1>Create todo</h1>
        <input
          onChange={handleChange}
          value={props.todo}
          type="text"
          name="name"
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
