import { useState, useEffect } from "react";
import uuid from "uuid/v4";

export default initialTodos => {
    const [todos, setTodos] = useState([]); //?
    useEffect(() => {
        (async () => {
          const info = await fetch(
            "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw"
          ).then(data => data.json());
          setTodos(info);
        })();
      }, []);
    return {
        todos,
        addTodo: (newTodoText, newDeadline) => {
            const newTodos = [
              ...todos,
              {
                id: uuid(),
                description: newTodoText || "missing description",
                deadline: newDeadline || "",
                completed: false
              }
            ];
            setTodos(newTodos); },
        removeTodo: todoId => {
            const updatedTodos = todos.filter(todo => todo.id !== todoId);
            setTodos(updatedTodos);
          },
          toggleTodo: todoId => {
            const updatedTodos = todos.map(todo =>
              todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
            );
            setTodos(updatedTodos);
          },
          editTodo: (todoId, newTask) => {
            const updatedTodos = todos.map(todo =>
              todo.id === todoId ? { ...todo, description: newTask } : todo
            );
            setTodos(updatedTodos);
          }
    };
};
