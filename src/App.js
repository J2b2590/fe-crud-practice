import React, { useState, useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import TodoContainer from "./container/todo_container";
import Show from "./Show";
import Counter from "./Counter";
import Icons from "./Icon";

import axios from "axios";
import "./App.css";

function App(props) {
  let [todos, setTodos] = useState([]);
  console.log(props, "APPPPP");

  useEffect(() => {
    axios.get("http://localhost:3000/todos").then((res) => {
      setTodos(res.data);
    });
    // console.log(todos);
  }, [...todos]);

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
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <div>
                <TodoContainer
                  component={TodoContainer}
                  todos={todos}
                  handleDelete={handleDelete}
                />
              </div>
            )}
          />

          <Route component={Show} exact path="/todos/:id" />
        </Switch>
        {/* <Counter />
        <Icons /> */}
      </div>
    </div>
  );
}

export default App;
