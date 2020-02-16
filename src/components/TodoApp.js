import React, { useState, useEffect } from "react";
import TodoListSortable from "./TodoList";
import TodoItemSortable from "./TodoItem";
import uuid from "uuid/v4";
import AddTodo from "./AddTodo";
import arrayMove from "array-move";

function TodoApp() {
  const [todos, setTodos] = useState([]);

  const onSortEnd = ({ oldIndex, newIndex }) =>
    setTodos(arrayMove(todos, oldIndex, newIndex));

  useEffect(() => {
    (async () => {
      const info = await fetch(
        "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw"
      ).then(data => data.json());
      setTodos(info);
    })();
  }, []);

  const addTodo = (newTodoText, newDeadline) => {
    const newTodos = [
      ...todos,
      {
        id: uuid(),
        description: newTodoText || "",
        deadline: newDeadline || "no deadline",
        completed: false
      }
    ];
    setTodos(newTodos);
  };

  const removeTodo = todoId => {
    const updatedTodos = todos.filter(todo => todo.id !== todoId);
    setTodos(updatedTodos);
  };

  const toggleTodo = todoId => {
    const updatedTodos = todos.map(todo =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const editTodo = (todoId, newTask) => {
    const updatedTodos = todos.map(todo =>
      todo.id === todoId ? { ...todo, description: newTask } : todo
    );
    setTodos(updatedTodos);
  };
  return (
    <div>
       <AddTodo addTodo={addTodo} />
      <TodoListSortable
        axis="y"
        onSortEnd={onSortEnd}
        onSortStart={(_, event) => event.preventDefault()}
      >
        {todos.map((todo, i) => (

              <TodoItemSortable
                index={i}
                key={todo.id}
                id={todo.id}
                description={todo.description}
                deadline={todo.deadline}
                editTodo={editTodo}
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
              />
        ))}
      </TodoListSortable>
    </div>
  );
}

export default TodoApp;
