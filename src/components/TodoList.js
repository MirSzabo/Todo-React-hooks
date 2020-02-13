import React from "react";
import TodoItem from "./TodoItem";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

function TodoList({ todos, removeTodo, editTodo, toggleTodo }) {
  const list = todos.map(todo => {
    return (
      <List key={todo.id}>
        <TodoItem
          key={todo.id}
          id={todo.id}
          description={todo.description}
          deadline={todo.deadline}
          completed={todo.completed}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
          editTodo={editTodo}
        />
        <Divider />
      </List>
    );
  });

  if (list.length === 0) {
    return (
      <div>
        <ul>No items</ul>
      </div>
    );
  }

  return (
    <div>
      <Paper>
        <ul>{list}</ul>
      </Paper>
    </div>
  );
}

export default TodoList;
