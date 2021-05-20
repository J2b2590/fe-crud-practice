import React from "react";

function TodoContainer(props) {
  console.log(props);
  return (
    <div>
      <p>container</p>
      {props.todos.map((todo) => {
        console.log(todo.text, "MAP");
        return <li>{todo.text}</li>;
      })}
    </div>
  );
}

export default TodoContainer;
