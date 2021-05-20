import logo from "./logo.svg";
import React, { useState, useEffect } from "react";

import axios from "axios";
import "./App.css";

function App() {
  let [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/todos").then((res) => {
      console.log(res);
    });
  });

  return (
    <div className="App">
      <h1>TODO</h1>
    </div>
  );
}

export default App;
