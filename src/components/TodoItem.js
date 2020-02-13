import React, { useState } from "react";
import EditTodoForm from "./EditTodoForm";
import PropTypes from "prop-types";
import ListItemText from "@material-ui/core/ListItemText";
import CheckBox from "@material-ui/core/CheckBox";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

function TodoItem({
  id,
  description,
  deadline,
  completed,
  removeTodo,
  editTodo,
  toggleTodo
}) {
  const [state, editState] = useState(false);

  const toggleEditState = () => editState(prev => !prev);

  const editFormShow = () => {
    return (
      <EditTodoForm
        editTodo={editTodo}
        id={id}
        editState={editState}
        description={description}
        toggleEditState={toggleEditState}
      />
    );
  };

  const editFormHide = () => {
    return (
      <div>
        <ListItem style={{ margin: "0.5rem" }}>
          <ListItemText>
            <CheckBox
              type="checkbox"
              name="completed"
              value={completed}
              onChange={() => toggleTodo(id)}
            />
            {description} <span style={{ fontSize: "0.7rem" }}>{deadline}</span>
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label="Edit" onClick={toggleEditState}>
              <EditIcon />
            </IconButton>
            <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </div>
    );
  };

  return (
    <div style={{ textDecoration: completed ? "Line-through" : "none" }}>
      {state ? editFormShow() : editFormHide()}
    </div>
  );
}

TodoItem.propTypes = {
  description: PropTypes.string
};

export default TodoItem;
