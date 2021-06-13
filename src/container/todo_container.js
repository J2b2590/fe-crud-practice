import React, { useState } from "react";
import Todos from "../todos";

function TodoContainer(props) {
  console.log(props, "CONTAINER");
  let [todo, setTodo] = useState([]);

  const handleChange = () => {};

  return (
    <div>
      <p>container</p>

      <form>
        <h1>Create todo</h1>
        <input
          onChange={this.handleChange}
          value={this.state.todo}
          type="text"
          name="name"
          placeholder="Enter TODO"
        />
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
