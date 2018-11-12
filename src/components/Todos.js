import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { List, Paper } from "@material-ui/core";

import Todo from "./Todo";
import { subscribeOnTodos } from "../services/todosService";

function Todos(props) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    subscribeOnTodos(props.userUID, todos => setTodos(todos));
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

const mapStateToProps = state => {
  return {
    userUID: state.todosReducer.userUID
  };
};

export default connect(mapStateToProps)(Todos);
