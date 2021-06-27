import React, { useEffect, useState } from "react";
import Todos from "../todos";
import axios from "axios";

function TodoContainer(props) {
  console.log(props, "CONTAINER");
  let [text, setText] = useState(" ");

  const handleChange = (e) => {
    setText(e.target.value);
    // console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const textObj = { text: text };

    axios
      .post("http://localhost:3000/todos", textObj)
      .then((res) => {
        console.log(res.data, "THEN RES");

        setText(res.data.text);
      })
      .catch((error) => {
        console.log(error);
      });

    setText(" ");
  };

  return (
    <div>
      <p>container</p>

      <form onSubmit={handleSubmit}>
        <h1>Create todo</h1>
        <input
          onChange={handleChange}
          value={text}
          type="text"
          name="text"
          placeholder="Enter TODO"
        />
        <button>Enter</button>
      </form>

      {props.todos.map((todo) => {
        // console.log(todo.text, "MAP");
        return (
          <Todos
            key={todo.id}
            newTodos={text}
            {...todo}
            handleDelete={props.handleDelete}
          />
        );
      })}
    </div>
  );
}

export default TodoContainer;
