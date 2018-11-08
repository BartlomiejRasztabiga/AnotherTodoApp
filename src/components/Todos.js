import React, { useState, useEffect } from "react";
import { List, Paper } from "@material-ui/core";

import Todo from "./Todo";
import { subscribeOnTodos } from "../services/todosService";

function Todos() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    subscribeOnTodos(todos => setTodos(todos));
  }, []);

  return (
    <Paper style={{ marginTop: 10 }}>
      <List>
        {todos.map((todo, key) => (
          <Todo todo={todo} key={key} />
        ))}
      </List>
    </Paper>
  );
}

export default Todos;
