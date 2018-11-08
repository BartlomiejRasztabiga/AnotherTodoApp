import React from "react";
import PropTypes from "prop-types";
import {
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
  ListItemSecondaryAction
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

import { markTodoAsDone, deleteTodo } from "../services/todosService";
import TodoAttachments from "./TodoAttachments";

function Todo(props) {
  const handleTodoClick = e => {
    if (["path", "svg", "BUTTON"].includes(e.target.tagName)) {
      // Clicked element is nested attachment, do not mark todo as done
      e.preventDefault();
      return;
    }
    markTodoAsDone(props.todo);
  };
  const handleTodoDelete = () => deleteTodo(props.todo);

  const todoData = props.todo.data();
  const descriptionClass = todoData.isDone ? "task-done" : "";

  if (todoData.isDeleted) return null;

  return (
    <ListItem button onClick={handleTodoClick}>
      <Checkbox checked={todoData.isDone} tabIndex={-1} disableRipple />
      <ListItemText
        primary={todoData.description}
        primaryTypographyProps={{ classes: { root: descriptionClass } }}
        style={{ overflow: "hidden" }}
      />
      <TodoAttachments todoData={todoData} />

      <ListItemSecondaryAction onClick={handleTodoDelete}>
        <IconButton aria-label="Delete">
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

Todo.propTypes = {
  todo: PropTypes.object
}

export default Todo;
