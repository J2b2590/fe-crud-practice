import React from "react";
import Todos from "../todos";

function TodoContainer(props) {
  console.log(props, "CONTAINER");
  return (
    <div>
      <p>container</p>
      {props.todos.map((todo) => {
        // console.log(todo.text, "MAP");
        return <Todos key={todo.id} {...todo} />;
      })}
    </div>
  );
}

export default TodoContainer;
