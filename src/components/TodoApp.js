import React from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import useTodoState from "../hooks/useTodoState"
import {TodosProvider} from "../context/todos.context"

function TodoApp() {
  const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState([]);

  return (
    <div>
      <TodosProvider>
      <AddTodo addTodo={addTodo} /> 
        <TodoList
          todos={todos}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
          editTodo={editTodo}
        />
        </TodosProvider>
    </div>
  );
}

export default TodoApp;
