import React, { createContext } from "react";
import useTodoState from "../hooks/useTodoState";

const defaultTodos = [
  {
    id: 1,
    description: "Get out of bed"
  },
  {
    id: 2,
    description: "Brush teeth"
  },
  {
    id: 3,
    description: "Eat breakfast"
  }
];
export const TodosContext = createContext();

export function TodosProvider(props) {
  const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState(
    defaultTodos
  );
  return (
    <TodosContext.Provider
      value={(todos, addTodo, removeTodo, toggleTodo, editTodo)}
    >
      {props.children}
    </TodosContext.Provider>
  );
}
